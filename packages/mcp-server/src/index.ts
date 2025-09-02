#!/usr/bin/env node

import { selectTools } from './server';
import { Endpoint, endpoints } from './tools';
import { McpOptions, parseCLIOptions } from './options';
import { launchStdioServer } from './stdio';
import { launchStreamableHTTPServer } from './http';

async function main() {
  const options = parseOptionsOrError();

  if (options.list) {
    listAllTools();
    return;
  }

  const selectedTools = await selectToolsOrError(endpoints, options);

  console.error(
    `MCP Server starting with ${selectedTools.length} tools:`,
    selectedTools.map((e) => e.tool.name),
  );

  switch (options.transport) {
    case 'stdio':
      await launchStdioServer(options);
      break;
    case 'http':
      await launchStreamableHTTPServer(options, options.port ?? options.socket);
      break;
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Fatal error in main():', error);
    process.exit(1);
  });
}

function parseOptionsOrError() {
  try {
    return parseCLIOptions();
  } catch (error) {
    console.error('Error parsing options:', error);
    process.exit(1);
  }
}

async function selectToolsOrError(endpoints: Endpoint[], options: McpOptions): Promise<Endpoint[]> {
  try {
    const includedTools = await selectTools(endpoints, options);
    if (includedTools.length === 0) {
      console.error('No tools match the provided filters.');
      process.exit(1);
    }
    return includedTools;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error filtering tools:', error.message);
    } else {
      console.error('Error filtering tools:', error);
    }
    process.exit(1);
  }
}

function listAllTools() {
  if (endpoints.length === 0) {
    console.log('No tools available.');
    return;
  }
  console.log('Available tools:\n');

  // Group endpoints by resource
  const resourceGroups = new Map<string, typeof endpoints>();

  for (const endpoint of endpoints) {
    const resource = endpoint.metadata.resource;
    if (!resourceGroups.has(resource)) {
      resourceGroups.set(resource, []);
    }
    resourceGroups.get(resource)!.push(endpoint);
  }

  // Sort resources alphabetically
  const sortedResources = Array.from(resourceGroups.keys()).sort();

  // Display hierarchically by resource
  for (const resource of sortedResources) {
    console.log(`Resource: ${resource}`);

    const resourceEndpoints = resourceGroups.get(resource)!;
    // Sort endpoints by tool name
    resourceEndpoints.sort((a, b) => a.tool.name.localeCompare(b.tool.name));

    for (const endpoint of resourceEndpoints) {
      const {
        tool,
        metadata: { operation, tags },
      } = endpoint;

      console.log(`  - ${tool.name} (${operation}) ${tags.length > 0 ? `tags: ${tags.join(', ')}` : ''}`);
      console.log(`    Description: ${tool.description}`);
    }
    console.log('');
  }
}
