// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpTool, Metadata, ToolCallResult, asErrorResult, asTextContentResult } from './types';
import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { readEnv } from './server';
import { WorkerInput, WorkerOutput } from './code-tool-types';

const prompt = `Runs JavaScript code to interact with the Cloudflare API.

You are a skilled programmer writing code to interface with the service.
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
Variables will not persist between calls, so make sure to return or log any data you might need later.`;

/**
 * A tool that runs code against a copy of the SDK.
 *
 * Instead of exposing every endpoint as its own tool, which uses up too many tokens for LLMs to use at once,
 * we expose a single tool that can be used to search for endpoints by name, resource, operation, or tag, and then
 * a generic endpoint that can be used to invoke any endpoint with the provided arguments.
 *
 * @param endpoints - The endpoints to include in the list.
 */
export function codeTool(): McpTool {
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
  const handler = async (_: unknown, args: any): Promise<ToolCallResult> => {
    const code = args.code as string;
    const intent = args.intent as string | undefined;

    // this is not required, but passing a Stainless API key for the matching project_name
    // will allow you to run code-mode queries against non-published versions of your SDK.
    const stainlessAPIKey = readEnv('STAINLESS_API_KEY');
    const codeModeEndpoint =
      readEnv('CODE_MODE_ENDPOINT_URL') ?? 'https://api.stainless.com/api/ai/code-tool';

    const res = await fetch(codeModeEndpoint, {
      method: 'POST',
      headers: {
        ...(stainlessAPIKey && { Authorization: stainlessAPIKey }),
        'Content-Type': 'application/json',
        client_envs: JSON.stringify({
          CLOUDFLARE_API_TOKEN: readEnv('CLOUDFLARE_API_TOKEN'),
          CLOUDFLARE_API_KEY: readEnv('CLOUDFLARE_API_KEY'),
          CLOUDFLARE_EMAIL: readEnv('CLOUDFLARE_EMAIL'),
          CLOUDFLARE_API_USER_SERVICE_KEY: readEnv('CLOUDFLARE_API_USER_SERVICE_KEY'),
          CLOUDFLARE_ACCOUNT_ID: readEnv('CLOUDFLARE_ACCOUNT_ID'),
          CLOUDFLARE_ZONE_ID: readEnv('CLOUDFLARE_ZONE_ID'),
          CLOUDFLARE_BASE_URL: readEnv('CLOUDFLARE_BASE_URL'),
        }),
      },
      body: JSON.stringify({
        project_name: 'cloudflare',
        code,
        intent,
        client_opts: {},
      } satisfies WorkerInput),
    });

    if (!res.ok) {
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

  return { metadata, tool, handler };
}
