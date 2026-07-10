import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { McpOptions } from './options';
import { initMcpServer, newMcpServer } from './server';
import { getLogger } from './logger';

export const launchStdioServer = async (mcpOptions: McpOptions) => {
  const server = await newMcpServer({
    stainlessApiKey: mcpOptions.stainlessApiKey,
    customInstructionsPath: mcpOptions.customInstructionsPath,
  });

  await initMcpServer({ server, mcpOptions, stainlessApiKey: mcpOptions.stainlessApiKey });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  getLogger().info('MCP Server running on stdio');
};
