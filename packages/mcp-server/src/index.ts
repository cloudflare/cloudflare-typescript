import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { init, server } from './server';
import { Endpoint, endpoints, Filter, query } from './tools';
import { applyCompatibilityTransformations } from './compat';
import { parseOptions } from './options';

async function main() {
  const { filters, capabilities, list } = parseOptionsOrError();

  if (list) {
    listAllTools();
    return;
  }

  const filteredEndpoints = filterEndpointsOrError(filters, endpoints);

  // Apply compatibility transformations
  const transformedEndpoints = applyCompatibilityTransformations(filteredEndpoints, capabilities);

  console.error(
    `MCP Server starting with ${transformedEndpoints.length} tools:`,
    transformedEndpoints.map((e) => e.tool.name),
  );

  init({ server, endpoints: transformedEndpoints });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server running on stdio');
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Fatal error in main():', error);
    process.exit(1);
  });
}

function parseOptionsOrError() {
  try {
    return parseOptions();
  } catch (error) {
    console.error('Error parsing options:', error);
    process.exit(1);
  }
}

function filterEndpointsOrError(filters: Filter[], endpoints: Endpoint[]) {
  try {
    const filteredEndpoints = query(filters, endpoints);
    if (filteredEndpoints.length === 0) {
      console.error('No tools match the provided filters.');
      process.exit(1);
    }
    return filteredEndpoints;
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
    console.error('No tools available.');
    return;
  }
  console.error('Available tools:\n');

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
    console.error(`Resource: ${resource}`);

    const resourceEndpoints = resourceGroups.get(resource)!;
    // Sort endpoints by tool name
    resourceEndpoints.sort((a, b) => a.tool.name.localeCompare(b.tool.name));

    for (const endpoint of resourceEndpoints) {
      const {
        tool,
        metadata: { operation, tags },
      } = endpoint;

      console.error(`  - ${tool.name} (${operation}) ${tags.length > 0 ? `tags: ${tags.join(', ')}` : ''}`);
      console.error(`    Description: ${tool.description}`);
    }
    console.error('');
  }
}
