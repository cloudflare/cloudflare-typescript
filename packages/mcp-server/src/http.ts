import { McpServer } from '@modelcontextprotocol/sdk/server/mcp';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

import express from 'express';
import { McpOptions } from './options';
import { initMcpServer, newMcpServer } from './server';
import { parseAuthHeaders } from './headers';
import { Endpoint } from './tools';

const newServer = (mcpOptions: McpOptions, req: express.Request, res: express.Response): McpServer | null => {
  const server = newMcpServer();
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

export const launchStreamableHTTPServer = async (
  options: McpOptions,
  endpoints: Endpoint[],
  port: number | undefined,
) => {
  const app = express();
  app.use(express.json());

  app.get('/', get);
  app.post('/', post(options));
  app.delete('/', del);

  console.error(`MCP Server running on streamable HTTP on port ${port}`);

  app.listen(port);
};
