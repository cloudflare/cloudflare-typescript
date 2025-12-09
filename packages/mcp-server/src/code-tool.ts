// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, ToolCallResult, asTextContentResult } from './tools/types';
import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { readEnv } from './server';
import { WorkerSuccess } from './code-tool-types';
/**
 * A tool that runs code against a copy of the SDK.
 *
 * Instead of exposing every endpoint as its own tool, which uses up too many tokens for LLMs to use at once,
 * we expose a single tool that can be used to search for endpoints by name, resource, operation, or tag, and then
 * a generic endpoint that can be used to invoke any endpoint with the provided arguments.
 *
 * @param endpoints - The endpoints to include in the list.
 */
export async function codeTool() {
  const metadata: Metadata = { resource: 'all', operation: 'write', tags: [] };
  const tool: Tool = {
    name: 'execute',
    description:
      'Runs JavaScript code to interact with the API.\n\nYou are a skilled programmer writing code to interface with the service.\nDefine an async function named "run" that takes a single parameter of an initialized SDK client and it will be run.\nWrite code within this template:\n\n```\nasync function run(client) {\n  // Fill this out\n}\n```\n\nYou will be returned anything that your function returns, plus the results of any console.log statements.\nIf any code triggers an error, the tool will return an error response, so you do not need to add error handling unless you want to output something more helpful than the raw error.\nIt is not necessary to add comments to code, unless by adding those comments you believe that you can generate better code.\nThis code will run in a container, and you will not be able to use fetch or otherwise interact with the network calls other than through the client you are given.\nAny variables you define won\'t live between successive uses of this call, so make sure to return or log any data you might need later.',
    inputSchema: { type: 'object', properties: { code: { type: 'string' } } },
  };
  const handler = async (_: unknown, args: any): Promise<ToolCallResult> => {
    const code = args.code as string;

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
        }),
      },
      body: JSON.stringify({
        project_name: 'cloudflare',
        code,
      }),
    });

    if (!res.ok) {
      throw new Error(
        `${res.status}: ${
          res.statusText
        } error when trying to contact Code Tool server. Details: ${await res.text()}`,
      );
    }

    return asTextContentResult((await res.json()) as WorkerSuccess);
  };

  return { metadata, tool, handler };
}
