// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

import express from 'express';
import { fromError } from 'zod-validation-error/v3';
import { McpOptions, parseQueryOptions } from './options';
import { initMcpServer, newMcpServer } from './server';
import { parseAuthHeaders } from './headers';
import { Endpoint } from './tools';

const newServer = (
  defaultMcpOptions: McpOptions,
  req: express.Request,
  res: express.Response,
): McpServer | null => {
  const server = newMcpServer();

  let mcpOptions: McpOptions;
  try {
    mcpOptions = parseQueryOptions(defaultMcpOptions, req.query);
  } catch (error) {
    res.status(400).json({
      jsonrpc: '2.0',
      error: {
        code: -32000,
        message: `Invalid request: ${fromError(error)}`,
      },
    });
    return null;
  }

  try {
    const authOptions = parseAuthHeaders(req);
    initMcpServer({
      server: server,
      clientOptions: {
        ...authOptions,
        defaultHeaders: {
          'X-Stainless-MCP': 'true',
        },
      },
      mcpOptions,
    });
  } catch {
    res.status(401).json({
      jsonrpc: '2.0',
      error: {
        code: -32000,
        message: 'Unauthorized',
      },
    });
    return null;
  }

  return server;
};

const post = (defaultOptions: McpOptions) => async (req: express.Request, res: express.Response) => {
  const server = newServer(defaultOptions, req, res);
  // If we return null, we already set the authorization error.
  if (server === null) return;
  const transport = new StreamableHTTPServerTransport({
    // Stateless server
    sessionIdGenerator: undefined,
  });
  await server.connect(transport);
  await transport.handleRequest(req, res, req.body);
};

const get = async (req: express.Request, res: express.Response) => {
  res.status(405).json({
    jsonrpc: '2.0',
    error: {
      code: -32000,
      message: 'Method not supported',
    },
  });
};

const del = async (req: express.Request, res: express.Response) => {
  res.status(405).json({
    jsonrpc: '2.0',
    error: {
      code: -32000,
      message: 'Method not supported',
    },
  });
};

export const streamableHTTPApp = (options: McpOptions): express.Express => {
  const app = express();
  app.set('query parser', 'extended');
  app.use(express.json());

  app.get('/', get);
  app.post('/', post(options));
  app.delete('/', del);

  return app;
};

export const launchStreamableHTTPServer = async (
  options: McpOptions,
  endpoints: Endpoint[],
  port: number | string | undefined,
) => {
  const app = streamableHTTPApp(options);
  const server = app.listen(port);
  const address = server.address();

  if (typeof address === 'string') {
    console.error(`MCP Server running on streamable HTTP at ${address}`);
  } else if (address !== null) {
    console.error(`MCP Server running on streamable HTTP on port ${address.port}`);
  } else {
    console.error(`MCP Server running on streamable HTTP on port ${port}`);
  }
};
