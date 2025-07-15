// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.rate_plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/available_rate_plans',
  operationId: 'zone-rate-plan-list-available-rate-plans',
};

export const tool: Tool = {
  name: 'get_zones_rate_plans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all rate plans the zone can subscribe to.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Plan identifier tag.'\n          },\n          components: {\n            type: 'array',\n            description: 'Array of available components values for the plan.',\n            items: {\n              type: 'object',\n              properties: {\n                default: {\n                  type: 'number',\n                  description: 'The default amount allocated.'\n                },\n                name: {\n                  type: 'string',\n                  description: 'The unique component.',\n                  enum: [                    'zones',\n                    'page_rules',\n                    'dedicated_certificates',\n                    'dedicated_certificates_custom'\n                  ]\n                },\n                unit_price: {\n                  type: 'number',\n                  description: 'The unit price of the addon.'\n                }\n              },\n              required: []\n            }\n          },\n          currency: {\n            type: 'string',\n            description: 'The monetary unit in which pricing information is displayed.'\n          },\n          duration: {\n            type: 'number',\n            description: 'The duration of the plan subscription.'\n          },\n          frequency: {\n            type: 'string',\n            description: 'The frequency at which you will be billed for this plan.',\n            enum: [              'weekly',\n              'monthly',\n              'quarterly',\n              'yearly'\n            ]\n          },\n          name: {\n            type: 'string',\n            description: 'The plan name.'\n          }\n        },\n        required: []\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zones.ratePlans.get(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
