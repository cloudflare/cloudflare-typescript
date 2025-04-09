// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { endpoints, HandlerFunction } from './tools';
import { CallToolRequestSchema, ListToolsRequestSchema, Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';
export { endpoints } from './tools';

// Create server instance
export const server = new McpServer(
  {
    name: 'cloudflare_api',
    version: '0.0.1-alpha.0',
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

/**
 * Initializes the provided MCP Server with the given tools and handlers.
 * If not provided, the default client, tools and handlers will be used.
 */
export function init(params: {
  server: Server | McpServer;
  client?: Cloudflare;
  endpoints?: { tool: Tool; handler: HandlerFunction }[];
}) {
  const server = params.server instanceof McpServer ? params.server.server : params.server;
  const providedEndpoints = params.endpoints || endpoints;
  const tools = providedEndpoints.map((endpoint) => endpoint.tool);
  const handlers = Object.fromEntries(
    providedEndpoints.map((endpoint) => [endpoint.tool.name, endpoint.handler]),
  );

  const client = params.client || new Cloudflare({});

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools,
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    const handler = handlers[name];
    if (!handler) {
      throw new Error(`Unknown tool: ${name}`);
    }

    return executeHandler(handler, client, args);
  });
}

/**
 * Runs the provided handler with the given client and arguments.
 */
export async function executeHandler(
  handler: HandlerFunction,
  client: Cloudflare,
  args: Record<string, unknown> | undefined,
) {
  const result = await handler(client, args || {});
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
}

export const readEnv = (env: string): string => {
  let envValue = undefined;
  if (typeof (globalThis as any).process !== 'undefined') {
    envValue = (globalThis as any).process.env?.[env]?.trim();
  } else if (typeof (globalThis as any).Deno !== 'undefined') {
    envValue = (globalThis as any).Deno.env?.get?.(env)?.trim();
  }
  if (envValue === undefined) {
    throw new Error(`Environment variable ${env} is not set`);
  }
  return envValue;
};
