import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { endpoints, Filter } from './tools';
import { ClientCapabilities, knownClients, ClientType } from './compat';

export type CLIOptions = McpOptions & {
  list: boolean;
};

export type McpOptions = {
  client: ClientType | undefined;
  includeDynamicTools: boolean | undefined;
  includeAllTools: boolean | undefined;
  filters: Filter[];
  capabilities?: Partial<ClientCapabilities>;
};

const CAPABILITY_CHOICES = [
  'top-level-unions',
  'valid-json',
  'refs',
  'unions',
  'formats',
  'tool-name-length',
] as const;

type Capability = (typeof CAPABILITY_CHOICES)[number];

function parseCapabilityValue(cap: string): { name: Capability; value?: number } {
  if (cap.startsWith('tool-name-length=')) {
    const parts = cap.split('=');
    if (parts.length === 2) {
      const length = parseInt(parts[1]!, 10);
      if (!isNaN(length)) {
        return { name: 'tool-name-length', value: length };
      }
      throw new Error(`Invalid tool-name-length value: ${parts[1]}. Expected a number.`);
    }
    throw new Error(`Invalid format for tool-name-length. Expected tool-name-length=N.`);
  }
  if (!CAPABILITY_CHOICES.includes(cap as Capability)) {
    throw new Error(`Unknown capability: ${cap}. Valid capabilities are: ${CAPABILITY_CHOICES.join(', ')}`);
  }
  return { name: cap as Capability };
}

export function parseOptions(): CLIOptions {
  const opts = yargs(hideBin(process.argv))
    .option('tools', {
      type: 'string',
      array: true,
      choices: ['dynamic', 'all'],
      description: 'Use dynamic tools or all tools',
    })
    .option('no-tools', {
      type: 'string',
      array: true,
      choices: ['dynamic', 'all'],
      description: 'Do not use any dynamic or all tools',
    })
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
    .option('client', {
      type: 'string',
      choices: Object.keys(knownClients),
      description: 'Specify the MCP client being used',
    })
    .option('capability', {
      type: 'string',
      array: true,
      description: 'Specify client capabilities',
      coerce: (values: string[]) => {
        return values.flatMap((v) => v.split(','));
      },
    })
    .option('no-capability', {
      type: 'string',
      array: true,
      description: 'Unset client capabilities',
      choices: CAPABILITY_CHOICES,
      coerce: (values: string[]) => {
        return values.flatMap((v) => v.split(','));
      },
    })
    .option('describe-capabilities', {
      type: 'boolean',
      description: 'Print detailed explanation of client capabilities and exit',
    })
    .help();

  for (const [command, desc] of examples()) {
    opts.example(command, desc);
  }

  const argv = opts.parseSync();

  // Handle describe-capabilities flag
  if (argv.describeCapabilities) {
    console.log(getCapabilitiesExplanation());
    process.exit(0);
  }

  const filters: Filter[] = [];

  // Helper function to support comma-separated values
  const splitValues = (values: string[] | undefined): string[] => {
    if (!values) return [];
    return values.flatMap((v) => v.split(','));
  };

  for (const tag of splitValues(argv.tag)) {
    filters.push({ type: 'tag', op: 'include', value: tag });
  }

  for (const tag of splitValues(argv.noTag)) {
    filters.push({ type: 'tag', op: 'exclude', value: tag });
  }

  for (const resource of splitValues(argv.resource)) {
    filters.push({ type: 'resource', op: 'include', value: resource });
  }

  for (const resource of splitValues(argv.noResource)) {
    filters.push({ type: 'resource', op: 'exclude', value: resource });
  }

  for (const tool of splitValues(argv.tool)) {
    filters.push({ type: 'tool', op: 'include', value: tool });
  }

  for (const tool of splitValues(argv.noTool)) {
    filters.push({ type: 'tool', op: 'exclude', value: tool });
  }

  for (const operation of splitValues(argv.operation)) {
    filters.push({ type: 'operation', op: 'include', value: operation });
  }

  for (const operation of splitValues(argv.noOperation)) {
    filters.push({ type: 'operation', op: 'exclude', value: operation });
  }

  // Parse client capabilities
  const clientCapabilities: ClientCapabilities = {
    topLevelUnions: true,
    validJson: true,
    refs: true,
    unions: true,
    formats: true,
    toolNameLength: undefined,
  };

  // Apply individual capability overrides
  if (Array.isArray(argv.capability)) {
    for (const cap of argv.capability) {
      const parsedCap = parseCapabilityValue(cap);
      if (parsedCap.name === 'top-level-unions') {
        clientCapabilities.topLevelUnions = true;
      } else if (parsedCap.name === 'valid-json') {
        clientCapabilities.validJson = true;
      } else if (parsedCap.name === 'refs') {
        clientCapabilities.refs = true;
      } else if (parsedCap.name === 'unions') {
        clientCapabilities.unions = true;
      } else if (parsedCap.name === 'formats') {
        clientCapabilities.formats = true;
      } else if (parsedCap.name === 'tool-name-length') {
        clientCapabilities.toolNameLength = parsedCap.value;
      }
    }
  }

  // Handle no-capability options to unset capabilities
  if (Array.isArray(argv.noCapability)) {
    for (const cap of argv.noCapability) {
      if (cap === 'top-level-unions') {
        clientCapabilities.topLevelUnions = false;
      } else if (cap === 'valid-json') {
        clientCapabilities.validJson = false;
      } else if (cap === 'refs') {
        clientCapabilities.refs = false;
      } else if (cap === 'unions') {
        clientCapabilities.unions = false;
      } else if (cap === 'formats') {
        clientCapabilities.formats = false;
      } else if (cap === 'tool-name-length') {
        clientCapabilities.toolNameLength = undefined;
      }
    }
  }

  const explicitTools = Boolean(argv.tools || argv.noTools);
  const includeDynamicTools =
    explicitTools ? argv.tools?.includes('dynamic') && !argv.noTools?.includes('dynamic') : undefined;
  const includeAllTools =
    explicitTools ? argv.tools?.includes('all') && !argv.noTools?.includes('all') : undefined;

  const client = argv.client as ClientType;
  return {
    client: client && knownClients[client] ? client : undefined,
    includeDynamicTools,
    includeAllTools,
    filters,
    capabilities: clientCapabilities,
    list: argv.list || false,
  };
}

function getCapabilitiesExplanation(): string {
  return `
Client Capabilities Explanation:

Different Language Models (LLMs) and the MCP clients that use them have varying limitations in how they handle tool schemas. Capability flags allow you to inform the MCP server about these limitations.

When a capability flag is set to false, the MCP server will automatically adjust the tool schemas to work around that limitation, ensuring broader compatibility.

Available Capabilities:

# top-level-unions
Some clients/LLMs do not support JSON schemas with a union type (anyOf) at the root level. If a client lacks this capability, the MCP server splits tools with top-level unions into multiple separate tools, one for each variant in the union.

# refs
Some clients/LLMs do not support $ref pointers for schema reuse. If a client lacks this capability, the MCP server automatically inlines all references ($defs) directly into the schema. Properties that would cause circular references are removed during this process.

# valid-json
Some clients/LLMs may incorrectly send arguments as a JSON-encoded string instead of a proper JSON object. If a client *has* this capability, the MCP server will attempt to parse string values as JSON if the initial validation against the schema fails.

# unions
Some clients/LLMs do not support union types (anyOf) in JSON schemas. If a client lacks this capability, the MCP server removes all anyOf fields and uses only the first variant as the schema.

# formats
Some clients/LLMs do not support the 'format' keyword in JSON Schema specifications. If a client lacks this capability, the MCP server removes all format fields and appends the format information to the field's description in parentheses.

# tool-name-length=N
Some clients/LLMs impose a maximum length on tool names. If this capability is set, the MCP server will automatically truncate tool names exceeding the specified length (N), ensuring uniqueness by appending numbers if necessary.

Client Presets (--client):
Presets like '--client=openai-agents' or '--client=cursor' automatically configure these capabilities based on current known limitations of those clients, simplifying setup.

Current presets:
${JSON.stringify(knownClients, null, 2)}
  `;
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
    [`--client="cursor"`, 'Adjust schemas to be more compatible with Cursor'],
    [
      `--capability="top-level-unions" --capability="tool-name-length=40"`,
      'Specify individual client capabilities',
    ],
    [
      `--client="cursor" --no-capability="tool-name-length"`,
      'Use cursor client preset but remove tool name length limit',
    ],
    ...(tag ? [[`--tag="${tag}"`, 'Filter based on tags'] as [string, string]] : []),
  ];
}
