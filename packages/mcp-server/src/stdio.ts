import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { initMcpServer, newMcpServer } from './server';
import { McpOptions } from './options';

export const launchStdioServer = async (options: McpOptions) => {
  const server = newMcpServer();

  initMcpServer({ server, mcpOptions: options });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server running on stdio');
};
