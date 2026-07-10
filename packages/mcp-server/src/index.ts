#!/usr/bin/env node

import { selectTools } from './server';
import { McpOptions, parseCLIOptions } from './options';
import { launchStdioServer } from './stdio';
import { launchStreamableHTTPServer } from './http';
import type { McpTool } from './types';
import { configureLogger, getLogger } from './logger';

async function main() {
  const options = parseOptionsOrError();
  configureLogger({
    level: options.debug ? 'debug' : 'info',
    pretty: options.logFormat === 'pretty',
  });

  const selectedTools = await selectToolsOrError(options);

  getLogger().info(
    { tools: selectedTools.map((e) => e.tool.name) },
    `MCP Server starting with ${selectedTools.length} tools`,
  );

  switch (options.transport) {
    case 'stdio':
      await launchStdioServer(options);
      break;
    case 'http':
      await launchStreamableHTTPServer({
        mcpOptions: options,
        port: options.socket ?? options.port,
      });
      break;
  }
}

if (require.main === module) {
  main().catch((error) => {
    // Logger might not be initialized yet
    console.error('Fatal error in main()', error);
    process.exit(1);
  });
}

function parseOptionsOrError() {
  try {
    return parseCLIOptions();
  } catch (error) {
    // Logger is initialized after options, so use console.error here
    console.error('Error parsing options', error);
    process.exit(1);
  }
}

async function selectToolsOrError(options: McpOptions): Promise<McpTool[]> {
  try {
    const includedTools = selectTools(options);
    if (includedTools.length === 0) {
      getLogger().error('No tools match the provided filters');
      process.exit(1);
    }
    return includedTools;
  } catch (error) {
    getLogger().error({ error }, 'Error filtering tools');
    process.exit(1);
  }
}
