// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import {
  ContentBlock,
  McpRequestContext,
  McpTool,
  Metadata,
  ToolCallResult,
  asErrorResult,
  asTextContentResult,
} from './types';
import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { readEnv } from './util';
import { WorkerInput, WorkerOutput } from './code-tool-types';
import { getLogger } from './logger';
import { SdkMethod } from './methods';
import { McpCodeExecutionMode } from './options';
import { ClientOptions } from 'cloudflare';

const prompt = `Runs JavaScript code to interact with the Cloudflare API.

You are a skilled TypeScript programmer writing code to interface with the service.
Define an async function named "run" that takes a single parameter of an initialized SDK client and it will be run.
For example:

\`\`\`
async function run(client) {
  const zone = await client.zones.create({
    account: { id: '023e105f4ecef8ad9ca31a8372d0c353' },
    name: 'example.com',
    type: 'full',
  });

  console.log(zone.id);
}
\`\`\`

You will be returned anything that your function returns, plus the results of any console.log statements.
Do not add try-catch blocks for single API calls. The tool will handle errors for you.
Do not add comments unless necessary for generating better code.
Code will run in a container, and cannot interact with the network outside of the given SDK client.
Variables will not persist between calls, so make sure to return or log any data you might need later.
Remember that you are writing TypeScript code, so you need to be careful with your types.
Always type dynamic key-value stores explicitly as Record<string, YourValueType> instead of {}.`;

/**
 * A tool that runs code against a copy of the SDK.
 *
 * Instead of exposing every endpoint as its own tool, which uses up too many tokens for LLMs to use at once,
 * we expose a single tool that can be used to search for endpoints by name, resource, operation, or tag, and then
 * a generic endpoint that can be used to invoke any endpoint with the provided arguments.
 *
 * @param blockedMethods - The methods to block for code execution. Blocking is done by simple string
 * matching, so it is not secure against obfuscation. For stronger security, block in the downstream API
 * with limited API keys.
 * @param codeExecutionMode - Whether to execute code in a local Deno environment or in a remote
 * sandbox environment hosted by Stainless.
 */
export function codeTool({
  blockedMethods,
  codeExecutionMode,
}: {
  blockedMethods: SdkMethod[] | undefined;
  codeExecutionMode: McpCodeExecutionMode;
}): McpTool {
  const metadata: Metadata = { resource: 'all', operation: 'write', tags: [] };
  const tool: Tool = {
    name: 'execute',
    description: prompt,
    inputSchema: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: 'Code to execute.',
        },
        intent: {
          type: 'string',
          description: 'Task you are trying to perform. Used for improving the service.',
        },
      },
      required: ['code'],
    },
  };

  const logger = getLogger();

  const handler = async ({
    reqContext,
    args,
  }: {
    reqContext: McpRequestContext;
    args: any;
  }): Promise<ToolCallResult> => {
    const code = args.code as string;
    // Do very basic blocking of code that includes forbidden method names.
    //
    // WARNING: This is not secure against obfuscation and other evasion methods. If
    // stronger security blocks are required, then these should be enforced in the downstream
    // API (e.g., by having users call the MCP server with API keys with limited permissions).
    if (blockedMethods) {
      const blockedMatches = blockedMethods.filter((method) => code.includes(method.fullyQualifiedName));
      if (blockedMatches.length > 0) {
        return asErrorResult(
          `The following methods have been blocked by the MCP server and cannot be used in code execution: ${blockedMatches
            .map((m) => m.fullyQualifiedName)
            .join(', ')}`,
        );
      }
    }

    let result: ToolCallResult;
    const startTime = Date.now();

    if (codeExecutionMode === 'local') {
      logger.debug('Executing code in local Deno environment');
      result = await localDenoHandler({ reqContext, args });
    } else {
      logger.debug('Executing code in remote Stainless environment');
      result = await remoteStainlessHandler({ reqContext, args });
    }

    logger.info(
      {
        codeExecutionMode,
        durationMs: Date.now() - startTime,
        isError: result.isError,
        contentRows: result.content?.length ?? 0,
      },
      'Got code tool execution result',
    );
    return result;
  };

  return { metadata, tool, handler };
}

const remoteStainlessHandler = async ({
  reqContext,
  args,
}: {
  reqContext: McpRequestContext;
  args: any;
}): Promise<ToolCallResult> => {
  const code = args.code as string;
  const intent = args.intent as string | undefined;
  const client = reqContext.client;

  const codeModeEndpoint = readEnv('CODE_MODE_ENDPOINT_URL') ?? 'https://api.stainless.com/api/ai/code-tool';

  const localClientEnvs = {
    CLOUDFLARE_API_TOKEN: readEnv('CLOUDFLARE_API_TOKEN') ?? client.apiToken ?? undefined,
    CLOUDFLARE_API_KEY: readEnv('CLOUDFLARE_API_KEY') ?? client.apiKey ?? undefined,
    CLOUDFLARE_EMAIL: readEnv('CLOUDFLARE_EMAIL') ?? client.apiEmail ?? undefined,
    CLOUDFLARE_API_USER_SERVICE_KEY:
      readEnv('CLOUDFLARE_API_USER_SERVICE_KEY') ?? client.userServiceKey ?? undefined,
    CLOUDFLARE_BASE_URL: readEnv('CLOUDFLARE_BASE_URL') ?? client.baseURL ?? undefined,
  };
  // Merge any upstream client envs from the request header, with upstream values taking precedence.
  const mergedClientEnvs = { ...localClientEnvs, ...reqContext.upstreamClientEnvs };

  // Setting a Stainless API key authenticates requests to the code tool endpoint.
  const res = await fetch(codeModeEndpoint, {
    method: 'POST',
    headers: {
      ...(reqContext.stainlessApiKey && { Authorization: reqContext.stainlessApiKey }),
      'Content-Type': 'application/json',
      'x-stainless-mcp-client-envs': JSON.stringify(mergedClientEnvs),
    },
    body: JSON.stringify({
      project_name: 'cloudflare',
      code,
      intent,
      client_opts: {},
    } satisfies WorkerInput),
  });

  if (!res.ok) {
    if (res.status === 404 && !reqContext.stainlessApiKey) {
      throw new Error(
        'Could not access code tool for this project. You may need to provide a Stainless API key via the STAINLESS_API_KEY environment variable, the --stainless-api-key flag, or the x-stainless-api-key HTTP header.',
      );
    }
    throw new Error(
      `${res.status}: ${
        res.statusText
      } error when trying to contact Code Tool server. Details: ${await res.text()}`,
    );
  }

  const { is_error, result, log_lines, err_lines } = (await res.json()) as WorkerOutput;
  const hasLogs = log_lines.length > 0 || err_lines.length > 0;
  const output = {
    result,
    ...(log_lines.length > 0 && { log_lines }),
    ...(err_lines.length > 0 && { err_lines }),
  };
  if (is_error) {
    return asErrorResult(typeof result === 'string' && !hasLogs ? result : JSON.stringify(output, null, 2));
  }
  return asTextContentResult(output);
};

const localDenoHandler = async ({
  reqContext,
  args,
}: {
  reqContext: McpRequestContext;
  args: unknown;
}): Promise<ToolCallResult> => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const url = await import('node:url');
  const { newDenoHTTPWorker } = await import('@valtown/deno-http-worker');
  const { getWorkerPath } = await import('./code-tool-paths.cjs');
  const workerPath = getWorkerPath();

  const client = reqContext.client;
  const baseURLHostname = new URL(client.baseURL).hostname;
  const { code } = args as { code: string };

  let denoPath: string;

  const packageRoot = path.resolve(path.dirname(workerPath), '..');
  const packageNodeModulesPath = path.resolve(packageRoot, 'node_modules');

  // Check if deno is in PATH
  const { execSync } = await import('node:child_process');
  try {
    execSync('command -v deno', { stdio: 'ignore' });
    denoPath = 'deno';
  } catch {
    try {
      // Use deno binary in node_modules if it's found
      const denoNodeModulesPath = path.resolve(packageNodeModulesPath, 'deno', 'bin.cjs');
      await fs.promises.access(denoNodeModulesPath, fs.constants.X_OK);
      denoPath = denoNodeModulesPath;
    } catch {
      return asErrorResult(
        'Deno is required for code execution but was not found. ' +
          'Install it from https://deno.land or run: npm install deno',
      );
    }
  }

  const allowReadPaths = [
    'code-tool-worker.mjs',
    `${workerPath.replace(/([\/\\]node_modules)[\/\\].+$/, '$1')}/`,
    packageRoot,
  ];

  // Follow symlinks in node_modules to allow read access to workspace-linked packages
  try {
    const sdkPkgName = 'cloudflare';
    const sdkDir = path.resolve(packageNodeModulesPath, sdkPkgName);
    const realSdkDir = fs.realpathSync(sdkDir);
    if (realSdkDir !== sdkDir) {
      allowReadPaths.push(realSdkDir);
    }
  } catch {
    // Ignore if symlink resolution fails
  }

  const allowRead = allowReadPaths.join(',');

  const worker = await newDenoHTTPWorker(url.pathToFileURL(workerPath), {
    denoExecutable: denoPath,
    runFlags: [
      `--node-modules-dir=manual`,
      `--allow-read=${allowRead}`,
      `--allow-net=${baseURLHostname}`,
      // Allow environment variables because instantiating the client will try to read from them,
      // even though they are not set.
      '--allow-env',
    ],
    printOutput: true,
    spawnOptions: {
      cwd: path.dirname(workerPath),
      // Merge any upstream client envs into the Deno subprocess environment,
      // with the upstream env vars taking precedence.
      env: { ...process.env, ...reqContext.upstreamClientEnvs },
    },
  });

  try {
    const resp = await new Promise<Response>((resolve, reject) => {
      worker.addEventListener('exit', (exitCode) => {
        reject(new Error(`Worker exited with code ${exitCode}`));
      });

      // Strip null/undefined values so that the worker SDK client can fall back to
      // reading from environment variables (including any upstreamClientEnvs).
      const opts = {
        ...(client.baseURL != null ? { baseURL: client.baseURL } : undefined),
        ...(client.apiToken != null ? { apiToken: client.apiToken } : undefined),
        ...(client.apiKey != null ? { apiKey: client.apiKey } : undefined),
        ...(client.apiEmail != null ? { apiEmail: client.apiEmail } : undefined),
        ...(client.userServiceKey != null ? { userServiceKey: client.userServiceKey } : undefined),
        defaultHeaders: {
          'X-Stainless-MCP': 'true',
        },
      } satisfies Partial<ClientOptions> as ClientOptions;

      const req = worker.request(
        'http://localhost',
        {
          headers: {
            'content-type': 'application/json',
          },
          method: 'POST',
        },
        (resp) => {
          const body: Uint8Array[] = [];
          resp.on('error', (err) => {
            reject(err);
          });
          resp.on('data', (chunk) => {
            body.push(chunk);
          });
          resp.on('end', () => {
            resolve(
              new Response(Buffer.concat(body).toString(), {
                status: resp.statusCode ?? 200,
                headers: resp.headers as any,
              }),
            );
          });
        },
      );

      const body = JSON.stringify({
        opts,
        code,
      });

      req.write(body, (err) => {
        if (err != null) {
          reject(err);
        }
      });

      req.end();
    });

    if (resp.status === 200) {
      const { result, log_lines, err_lines } = (await resp.json()) as WorkerOutput;
      const returnOutput: ContentBlock | null =
        result == null ? null : (
          {
            type: 'text',
            text: typeof result === 'string' ? result : JSON.stringify(result),
          }
        );
      const logOutput: ContentBlock | null =
        log_lines.length === 0 ?
          null
        : {
            type: 'text',
            text: log_lines.join('\n'),
          };
      const errOutput: ContentBlock | null =
        err_lines.length === 0 ?
          null
        : {
            type: 'text',
            text: 'Error output:\n' + err_lines.join('\n'),
          };
      return {
        content: [returnOutput, logOutput, errOutput].filter((block) => block !== null),
      };
    } else {
      const { result, log_lines, err_lines } = (await resp.json()) as WorkerOutput;
      const messageOutput: ContentBlock | null =
        result == null ? null : (
          {
            type: 'text',
            text: typeof result === 'string' ? result : JSON.stringify(result),
          }
        );
      const logOutput: ContentBlock | null =
        log_lines.length === 0 ?
          null
        : {
            type: 'text',
            text: log_lines.join('\n'),
          };
      const errOutput: ContentBlock | null =
        err_lines.length === 0 ?
          null
        : {
            type: 'text',
            text: 'Error output:\n' + err_lines.join('\n'),
          };
      return {
        content: [messageOutput, logOutput, errOutput].filter((block) => block !== null),
        isError: true,
      };
    }
  } finally {
    worker.terminate();
  }
};
