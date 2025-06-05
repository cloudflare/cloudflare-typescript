// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { Endpoint, endpoints, HandlerFunction, query } from './tools';
import { CallToolRequestSchema, ListToolsRequestSchema, Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';
import {
  applyCompatibilityTransformations,
  ClientCapabilities,
  defaultClientCapabilities,
  parseEmbeddedJSON,
} from './compat';
import { dynamicTools } from './dynamic-tools';
import { ParsedOptions } from './options';
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
  capabilities?: Partial<ClientCapabilities>;
}) {
  const server = params.server instanceof McpServer ? params.server.server : params.server;
  const providedEndpoints = params.endpoints || endpoints;

  const endpointMap = Object.fromEntries(providedEndpoints.map((endpoint) => [endpoint.tool.name, endpoint]));

  const client = params.client || new Cloudflare({});

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: providedEndpoints.map((endpoint) => endpoint.tool),
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const endpoint = endpointMap[name];
    if (!endpoint) {
      throw new Error(`Unknown tool: ${name}`);
    }

    return executeHandler(endpoint.tool, endpoint.handler, client, args, params.capabilities);
  });
}

/**
 * Selects the tools to include in the MCP Server based on the provided options.
 */
export function selectTools(endpoints: Endpoint[], options: ParsedOptions) {
  const filteredEndpoints = query(options.filters, endpoints);

  const includedTools = filteredEndpoints;

  if (options.includeAllTools && includedTools.length === 0) {
    includedTools.push(...endpoints);
  }

  if (options.includeDynamicTools) {
    includedTools.push(...dynamicTools(endpoints));
  }

  if (includedTools.length === 0) {
    includedTools.push(...endpoints);
  }

  return applyCompatibilityTransformations(includedTools, options.capabilities);
}

/**
 * Runs the provided handler with the given client and arguments.
 */
export async function executeHandler(
  tool: Tool,
  handler: HandlerFunction,
  client: Cloudflare,
  args: Record<string, unknown> | undefined,
  compatibilityOptions?: Partial<ClientCapabilities>,
) {
  const options = { ...defaultClientCapabilities, ...compatibilityOptions };
  if (options.validJson && args) {
    args = parseEmbeddedJSON(args, tool.inputSchema);
  }
  return await handler(client, args || {});
}

export const readEnv = (env: string): string | undefined => {
  if (typeof (globalThis as any).process !== 'undefined') {
    return (globalThis as any).process.env?.[env]?.trim();
  } else if (typeof (globalThis as any).Deno !== 'undefined') {
    return (globalThis as any).Deno.env?.get?.(env)?.trim();
  }
  return;
};

export const readEnvOrError = (env: string): string => {
  let envValue = readEnv(env);
  if (envValue === undefined) {
    throw new Error(`Environment variable ${env} is not set`);
  }
  return envValue;
};
