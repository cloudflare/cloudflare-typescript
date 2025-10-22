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
  httpPath: '/accounts/{account_id}/dex/fleet-status/over-time',
  operationId: 'dex-fleet-status-over-time',
};

export const tool: Tool = {
  name: 'over_time_dex_zero_trust_fleet_status',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList details for devices using WARP, up to 7 days\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        deviceStats: {\n          type: 'object',\n          properties: {\n            byMode: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  timestamp: {\n                    type: 'string',\n                    description: 'Timestamp in ISO format'\n                  },\n                  uniqueDevicesTotal: {\n                    type: 'number',\n                    description: 'Number of unique devices'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                }\n              }\n            },\n            byStatus: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  timestamp: {\n                    type: 'string',\n                    description: 'Timestamp in ISO format'\n                  },\n                  uniqueDevicesTotal: {\n                    type: 'number',\n                    description: 'Number of unique devices'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                }\n              }\n            },\n            uniqueDevicesTotal: {\n              type: 'number',\n              description: 'Number of unique devices'\n            }\n          }\n        }\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      from: {
        type: 'string',
        description: 'Time range beginning in ISO format',
      },
      to: {
        type: 'string',
        description: 'Time range end in ISO format',
      },
      colo: {
        type: 'string',
        description: 'Cloudflare colo',
      },
      device_id: {
        type: 'string',
        description: 'Device-specific ID, given as UUID v4',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'from', 'to'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.dex.fleetStatus.overTime(body)),
  );
};

export default { metadata, tool, handler };
