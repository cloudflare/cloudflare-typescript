// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.ai_controls.mcp.portals',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/access/ai-controls/mcp/portals',
  operationId: 'mcp-portals-api-create-portals',
};

export const tool: Tool = {
  name: 'create_mcp_ai_controls_access_zero_trust_portals',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new MCP Portal\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'portal id'\n        },\n        hostname: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        created_by: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        },\n        modified_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        modified_by: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'hostname',\n        'name'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
        description: 'portal id',
      },
      hostname: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      servers: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            server_id: {
              type: 'string',
              description: 'server id',
            },
            default_disabled: {
              type: 'boolean',
            },
            on_behalf: {
              type: 'boolean',
            },
            updated_prompts: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                  },
                  description: {
                    type: 'string',
                  },
                  enabled: {
                    type: 'boolean',
                  },
                },
                required: ['name'],
              },
            },
            updated_tools: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                  },
                  description: {
                    type: 'string',
                  },
                  enabled: {
                    type: 'boolean',
                  },
                },
                required: ['name'],
              },
            },
          },
          required: ['server_id'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'id', 'hostname', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.access.aiControls.mcp.portals.create(body)),
  );
};

export default { metadata, tool, handler };
