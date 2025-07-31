// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/subscription',
  operationId: 'zone-subscription-zone-subscription-details',
};

export const tool: Tool = {
  name: 'get_zones_subscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists zone subscription details.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/subscription'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    subscription: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Subscription identifier tag.'\n        },\n        currency: {\n          type: 'string',\n          description: 'The monetary unit in which pricing information is displayed.'\n        },\n        current_period_end: {\n          type: 'string',\n          description: 'The end of the current period and also when the next billing is due.',\n          format: 'date-time'\n        },\n        current_period_start: {\n          type: 'string',\n          description: 'When the current billing period started. May match initial_period_start if this is the first period.',\n          format: 'date-time'\n        },\n        frequency: {\n          type: 'string',\n          description: 'How often the subscription is renewed automatically.',\n          enum: [            'weekly',\n            'monthly',\n            'quarterly',\n            'yearly'\n          ]\n        },\n        price: {\n          type: 'number',\n          description: 'The price of the subscription that will be billed, in US dollars.'\n        },\n        rate_plan: {\n          $ref: '#/$defs/rate_plan'\n        },\n        state: {\n          type: 'string',\n          description: 'The state that the subscription is in.',\n          enum: [            'Trial',\n            'Provisioned',\n            'Paid',\n            'AwaitingPayment',\n            'Cancelled',\n            'Failed',\n            'Expired'\n          ]\n        }\n      }\n    },\n    rate_plan: {\n      type: 'object',\n      description: 'The rate plan applied to the subscription.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the rate plan.',\n          enum: [            'free',\n            'lite',\n            'pro',\n            'pro_plus',\n            'business',\n            'enterprise',\n            'partners_free',\n            'partners_pro',\n            'partners_business',\n            'partners_enterprise'\n          ]\n        },\n        currency: {\n          type: 'string',\n          description: 'The currency applied to the rate plan subscription.'\n        },\n        externally_managed: {\n          type: 'boolean',\n          description: 'Whether this rate plan is managed externally from Cloudflare.'\n        },\n        is_contract: {\n          type: 'boolean',\n          description: 'Whether a rate plan is enterprise-based (or newly adopted term contract).'\n        },\n        public_name: {\n          type: 'string',\n          description: 'The full name of the rate plan.'\n        },\n        scope: {\n          type: 'string',\n          description: 'The scope that this rate plan applies to.'\n        },\n        sets: {\n          type: 'array',\n          description: 'The list of sets this rate plan applies to.',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Subscription identifier tag.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.zones.subscriptions.get(body)));
};

export default { metadata, tool, handler };
