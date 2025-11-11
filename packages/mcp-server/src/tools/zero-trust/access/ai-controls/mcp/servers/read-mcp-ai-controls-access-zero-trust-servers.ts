// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.ai_controls.mcp.servers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/ai-controls/mcp/servers/{id}',
  operationId: 'mcp-portals-api-fetch-servers',
};

export const tool: Tool = {
  name: 'read_mcp_ai_controls_access_zero_trust_servers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead the details of a MCP Server\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'server id'\n        },\n        auth_type: {\n          type: 'string',\n          enum: [            'oauth',\n            'bearer',\n            'unauthenticated'\n          ]\n        },\n        hostname: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        prompts: {\n          type: 'array',\n          items: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        tools: {\n          type: 'array',\n          items: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        created_by: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        },\n        error: {\n          type: 'string'\n        },\n        last_synced: {\n          type: 'string',\n          format: 'date-time'\n        },\n        modified_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        modified_by: {\n          type: 'string'\n        },\n        status: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'auth_type',\n        'hostname',\n        'name',\n        'prompts',\n        'tools'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
        description: 'server id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.access.aiControls.mcp.servers.read(id, body)),
  );
};

export default { metadata, tool, handler };
