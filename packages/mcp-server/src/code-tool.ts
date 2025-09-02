// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import Cloudflare, { ClientOptions } from 'cloudflare';
import { Endpoint, ContentBlock, Metadata } from './tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';

import { WorkerInput, WorkerError, WorkerSuccess } from './code-tool-types';

/**
 * A tool that runs code against a copy of the SDK.
 *
 * Instead of exposing every endpoint as it's own tool, which uses up too many tokens for LLMs to use at once,
 * we expose a single tool that can be used to search for endpoints by name, resource, operation, or tag, and then
 * a generic endpoint that can be used to invoke any endpoint with the provided arguments.
 *
 * @param endpoints - The endpoints to include in the list.
 */
export async function codeTool(): Promise<Endpoint> {
  const metadata: Metadata = { resource: 'all', operation: 'write', tags: [] };
  const tool: Tool = {
    name: 'execute',
    description:
      'Runs Typescript code to interact with the API.\nYou are a skilled programmer writing code to interface with the service.\nDefine an async function named "run" that takes a single parameter of an initialized client, and it will be run.\nDo not initialize a client, but instead use the client that you are given as a parameter.\nYou will be returned anything that your function returns, plus the results of any console.log statements.\nIf any code triggers an error, the tool will return an error response, so you do not need to add error handling unless you want to output something more helpful than the raw error.\nIt is not necessary to add comments to code, unless by adding those comments you believe that you can generate better code.\nThis code will run in a container, and you will not be able to use fetch or otherwise interact with the network calls other than through the client you are given.\nAny variables you define won\'t live between successive uses of this call, so make sure to return or log any data you might need later.',
    inputSchema: { type: 'object', properties: { code: { type: 'string' } } },
  };

  // Import dynamically to avoid failing at import time in cases where the environment is not well-supported.
  const { newDenoHTTPWorker } = await import('@valtown/deno-http-worker');
  const { workerPath } = await import('./code-tool-paths.cjs');

  const handler = async (client: Cloudflare, args: unknown) => {
    const baseURLHostname = new URL(client.baseURL).hostname;
    const { code } = args as { code: string };

    const worker = await newDenoHTTPWorker(pathToFileURL(workerPath), {
      runFlags: [
        `--node-modules-dir=manual`,
        `--allow-read=code-tool-worker.mjs,${workerPath.replace(/([\/\\]node_modules)[\/\\].+$/, '$1')}/`,
        `--allow-net=${baseURLHostname}`,
        // Allow environment variables because instantiating the client will try to read from them,
        // even though they are not set.
        '--allow-env',
      ],
      printOutput: true,
      spawnOptions: {
        cwd: dirname(workerPath),
      },
    });

    try {
      const resp = await new Promise<Response>((resolve, reject) => {
        worker.addEventListener('exit', (exitCode) => {
          reject(new Error(`Worker exited with code ${exitCode}`));
        });

        const opts: ClientOptions = {
          baseURL: client.baseURL,
          apiToken: client.apiToken,
          apiKey: client.apiKey,
          apiEmail: client.apiEmail,
          userServiceKey: client.userServiceKey,
          defaultHeaders: {
            'X-Stainless-MCP': 'true',
          },
        };

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
        } satisfies WorkerInput);

        req.write(body, (err) => {
          if (err !== null && err !== undefined) {
            reject(err);
          }
        });

        req.end();
      });

      if (resp.status === 200) {
        const { result, logLines, errLines } = (await resp.json()) as WorkerSuccess;
        const returnOutput: ContentBlock | null =
          result === null ? null
          : result === undefined ? null
          : {
              type: 'text',
              text: typeof result === 'string' ? (result as string) : JSON.stringify(result),
            };
        const logOutput: ContentBlock | null =
          logLines.length === 0 ?
            null
          : {
              type: 'text',
              text: logLines.join('\n'),
            };
        const errOutput: ContentBlock | null =
          errLines.length === 0 ?
            null
          : {
              type: 'text',
              text: 'Error output:\n' + errLines.join('\n'),
            };
        return {
          content: [returnOutput, logOutput, errOutput].filter((block) => block !== null),
        };
      } else {
        const { message } = (await resp.json()) as WorkerError;
        throw new Error(message);
      }
    } catch (e) {
      throw e;
    } finally {
      worker.terminate();
    }
  };

  return { metadata, tool, handler };
}
