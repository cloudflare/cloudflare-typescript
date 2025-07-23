// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.fleet_status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/fleet-status/live',
  operationId: 'dex-fleet-status-live',
};

export const tool: Tool = {
  name: 'live_dex_zero_trust_fleet_status',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList details for live (up to 60 minutes) devices using WARP\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        deviceStats: {\n          type: 'object',\n          properties: {\n            byColo: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/live_stat'\n              }\n            },\n            byMode: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/live_stat'\n              }\n            },\n            byPlatform: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/live_stat'\n              }\n            },\n            byStatus: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/live_stat'\n              }\n            },\n            byVersion: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/live_stat'\n              }\n            },\n            uniqueDevicesTotal: {\n              type: 'number',\n              description: 'Number of unique devices'\n            }\n          }\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    live_stat: {\n      type: 'object',\n      properties: {\n        uniqueDevicesTotal: {\n          type: 'number',\n          description: 'Number of unique devices'\n        },\n        value: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      since_minutes: {
        type: 'number',
        description: 'Number of minutes before current time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'since_minutes'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.zeroTrust.dex.fleetStatus.live(body)));
};

export default { metadata, tool, handler };
