import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { init, server } from './server';
import { endpoints, Filter, query } from './tools';

async function main() {
  const opts = yargs(hideBin(process.argv))
    .option('tool', {
      type: 'string',
      array: true,
      description: 'Include tools matching the specified names',
    })
    .option('resource', {
      type: 'string',
      array: true,
      description: 'Include tools matching the specified resources',
    })
    .option('operation', {
      type: 'string',
      array: true,
      choices: ['read', 'write'],
      description: 'Include tools matching the specified operations',
    })
    .option('tag', {
      type: 'string',
      array: true,
      description: 'Include tools with the specified tags',
    })
    .option('no-tool', {
      type: 'string',
      array: true,
      description: 'Exclude tools matching the specified names',
    })
    .option('no-resource', {
      type: 'string',
      array: true,
      description: 'Exclude tools matching the specified resources',
    })
    .option('no-operation', {
      type: 'string',
      array: true,
      description: 'Exclude tools matching the specified operations',
    })
    .option('no-tag', {
      type: 'string',
      array: true,
      description: 'Exclude tools with the specified tags',
    })
    .option('list', {
      type: 'boolean',
      description: 'List all tools and exit',
    })
    .help();

  for (const [command, desc] of examples()) {
    opts.example(command, desc);
  }

  const argv = opts.parseSync();

  if (argv.list) {
    listAllTools();
    return;
  }
  const filters: Filter[] = [];

  for (const tag of argv.tag || []) {
    filters.push({ type: 'tag', op: 'include', value: tag });
  }

  for (const tag of argv.noTag || []) {
    filters.push({ type: 'tag', op: 'exclude', value: tag });
  }

  for (const resource of argv.resource || []) {
    filters.push({ type: 'resource', op: 'include', value: resource });
  }

  for (const resource of argv.noResource || []) {
    filters.push({ type: 'resource', op: 'exclude', value: resource });
  }

  for (const tool of argv.tool || []) {
    filters.push({ type: 'tool', op: 'include', value: tool });
  }

  for (const tool of argv.noTool || []) {
    filters.push({ type: 'tool', op: 'exclude', value: tool });
  }

  for (const operation of argv.operation || []) {
    filters.push({ type: 'operation', op: 'include', value: operation });
  }

  for (const operation of argv.noOperation || []) {
    filters.push({ type: 'operation', op: 'exclude', value: operation });
  }

  const filteredEndpoints = query(filters, endpoints);

  if (filteredEndpoints.length === 0) {
    console.error('No tools match the provided filters.');
    process.exit(1);
  }

  console.error(
    `MCP Server starting with ${filteredEndpoints.length} tools:`,
    filteredEndpoints.map((e) => e.tool.name),
  );

  init({ server, endpoints: filteredEndpoints });

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

function examples(): [string, string][] {
  const firstEndpoint = endpoints[0]!;
  const secondEndpoint =
    endpoints.find((e) => e.metadata.resource !== firstEndpoint.metadata.resource) || endpoints[1];
  const tag = endpoints.find((e) => e.metadata.tags.length > 0)?.metadata.tags[0];
  const otherEndpoint = secondEndpoint || firstEndpoint;

  return [
    [
      `--tool="${firstEndpoint.tool.name}" ${secondEndpoint ? `--tool="${secondEndpoint.tool.name}"` : ''}`,
      'Include tools by name',
    ],
    [
      `--resource="${firstEndpoint.metadata.resource}" --operation="read"`,
      'Filter by resource and operation',
    ],
    [
      `--resource="${otherEndpoint.metadata.resource}*" --no-tool="${otherEndpoint.tool.name}"`,
      'Use resource wildcards and exclusions',
    ],
    ...(tag ? [[`--tag="${tag}"`, 'Filter based on tags'] as [string, string]] : []),
  ];
}
