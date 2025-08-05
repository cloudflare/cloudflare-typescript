import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { init, newMcpServer } from './server';
import { Endpoint } from './tools';
import { McpOptions } from './options';

export const launchStdioServer = async (options: McpOptions, endpoints: Endpoint[]) => {
  const server = newMcpServer();

  init({ server, endpoints });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server running on stdio');
};
