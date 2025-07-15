// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/available_plans/{plan_identifier}',
  operationId: 'zone-rate-plan-available-plan-details',
};

export const tool: Tool = {
  name: 'get_zones_plans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDetails of the available plan that the zone can subscribe to.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/available_rate_plan'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    available_rate_plan: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        can_subscribe: {\n          type: 'boolean',\n          description: 'Indicates whether you can subscribe to this plan.'\n        },\n        currency: {\n          type: 'string',\n          description: 'The monetary unit in which pricing information is displayed.'\n        },\n        externally_managed: {\n          type: 'boolean',\n          description: 'Indicates whether this plan is managed externally.'\n        },\n        frequency: {\n          type: 'string',\n          description: 'The frequency at which you will be billed for this plan.',\n          enum: [            'weekly',\n            'monthly',\n            'quarterly',\n            'yearly'\n          ]\n        },\n        is_subscribed: {\n          type: 'boolean',\n          description: 'Indicates whether you are currently subscribed to this plan.'\n        },\n        legacy_discount: {\n          type: 'boolean',\n          description: 'Indicates whether this plan has a legacy discount applied.'\n        },\n        legacy_id: {\n          type: 'string',\n          description: 'The legacy identifier for this rate plan, if any.'\n        },\n        name: {\n          type: 'string',\n          description: 'The plan name.'\n        },\n        price: {\n          type: 'number',\n          description: 'The amount you will be billed for this plan.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      plan_identifier: {
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
  const { plan_identifier, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.zones.plans.get(plan_identifier, body)));
};

export default { metadata, tool, handler };
