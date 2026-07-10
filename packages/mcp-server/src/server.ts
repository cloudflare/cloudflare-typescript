// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  SetLevelRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { ClientOptions } from 'cloudflare';
import Cloudflare from 'cloudflare';
import { codeTool } from './code-tool';
import docsSearchTool from './docs-search-tool';
import { setLocalSearch } from './docs-search-tool';
import { LocalDocsSearch } from './local-docs-search';
import { getInstructions } from './instructions';
import { McpOptions } from './options';
import { blockedMethodsForCodeTool } from './methods';
import { HandlerFunction, McpRequestContext, ToolCallResult, McpTool } from './types';

export const newMcpServer = async ({
  stainlessApiKey,
  customInstructionsPath,
}: {
  stainlessApiKey?: string | undefined;
  customInstructionsPath?: string | undefined;
}) =>
  new McpServer(
    {
      name: 'cloudflare_api',
      version: '0.0.1-alpha.0',
    },
    {
      instructions: await getInstructions({ stainlessApiKey, customInstructionsPath }),
      capabilities: { tools: {}, logging: {} },
    },
  );

/**
 * Initializes the provided MCP Server with the given tools and handlers.
 * If not provided, the default client, tools and handlers will be used.
 */
export async function initMcpServer(params: {
  server: Server | McpServer;
  clientOptions?: ClientOptions;
  mcpOptions?: McpOptions;
  stainlessApiKey?: string | undefined;
  upstreamClientEnvs?: Record<string, string> | undefined;
  mcpSessionId?: string | undefined;
  mcpClientInfo?: { name: string; version: string } | undefined;
}) {
  const server = params.server instanceof McpServer ? params.server.server : params.server;

  const logAtLevel =
    (level: 'debug' | 'info' | 'warning' | 'error') =>
    (message: string, ...rest: unknown[]) => {
      void server.sendLoggingMessage({
        level,
        data: { message, rest },
      });
    };
  const logger = {
    debug: logAtLevel('debug'),
    info: logAtLevel('info'),
    warn: logAtLevel('warning'),
    error: logAtLevel('error'),
  };

  if (params.mcpOptions?.docsSearchMode === 'local') {
    const docsDir = params.mcpOptions?.docsDir;
    const localSearch = await LocalDocsSearch.create(docsDir ? { docsDir } : undefined);
    setLocalSearch(localSearch);
  }

  let _client: Cloudflare | undefined;
  let _clientError: Error | undefined;
  let _logLevel: 'debug' | 'info' | 'warn' | 'error' | 'off' | undefined;

  const getClient = (): Cloudflare => {
    if (_clientError) throw _clientError;
    if (!_client) {
      try {
        _client = new Cloudflare({
          logger,
          ...params.clientOptions,
          defaultHeaders: {
            ...params.clientOptions?.defaultHeaders,
            'X-Stainless-MCP': 'true',
          },
        });
        if (_logLevel) {
          _client = _client.withOptions({ logLevel: _logLevel });
        }
      } catch (e) {
        _clientError = e instanceof Error ? e : new Error(String(e));
        throw _clientError;
      }
    }
    return _client;
  };

  const providedTools = selectTools(params.mcpOptions);
  const toolMap = Object.fromEntries(providedTools.map((mcpTool) => [mcpTool.tool.name, mcpTool]));

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: providedTools.map((mcpTool) => mcpTool.tool),
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const mcpTool = toolMap[name];
    if (!mcpTool) {
      throw new Error(`Unknown tool: ${name}`);
    }

    let client: Cloudflare;
    try {
      client = getClient();
    } catch (error) {
      return {
        content: [
          {
            type: 'text' as const,
            text: `Failed to initialize client: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }

    return executeHandler({
      handler: mcpTool.handler,
      reqContext: {
        client,
        stainlessApiKey: params.stainlessApiKey ?? params.mcpOptions?.stainlessApiKey,
        upstreamClientEnvs: params.upstreamClientEnvs,
        mcpSessionId: params.mcpSessionId,
        mcpClientInfo: params.mcpClientInfo,
      },
      args,
    });
  });

  server.setRequestHandler(SetLevelRequestSchema, async (request) => {
    const { level } = request.params;
    let logLevel: 'debug' | 'info' | 'warn' | 'error' | 'off';
    switch (level) {
      case 'debug':
        logLevel = 'debug';
        break;
      case 'info':
        logLevel = 'info';
        break;
      case 'notice':
      case 'warning':
        logLevel = 'warn';
        break;
      case 'error':
        logLevel = 'error';
        break;
      default:
        logLevel = 'off';
        break;
    }
    _logLevel = logLevel;
    if (_client) {
      _client = _client.withOptions({ logLevel });
    }
    return {};
  });
}

/**
 * Selects the tools to include in the MCP Server based on the provided options.
 */
export function selectTools(options?: McpOptions): McpTool[] {
  const includedTools = [];

  if (options?.includeCodeTool ?? true) {
    includedTools.push(
      codeTool({
        blockedMethods: blockedMethodsForCodeTool(options),
        codeExecutionMode: options?.codeExecutionMode ?? 'stainless-sandbox',
      }),
    );
  }
  if (options?.includeDocsTools ?? true) {
    includedTools.push(docsSearchTool);
  }
  return includedTools;
}

/**
 * Runs the provided handler with the given client and arguments.
 */
export async function executeHandler({
  handler,
  reqContext,
  args,
}: {
  handler: HandlerFunction;
  reqContext: McpRequestContext;
  args: Record<string, unknown> | undefined;
}): Promise<ToolCallResult> {
  return await handler({ reqContext, args: args || {} });
}
