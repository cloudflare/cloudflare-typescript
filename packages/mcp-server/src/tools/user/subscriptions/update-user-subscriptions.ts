// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/user/subscriptions/{identifier}',
  operationId: 'user-subscription-update-user-subscription',
};

export const tool: Tool = {
  name: 'update_user_subscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a user's subscriptions.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/subscription_update_response',\n  $defs: {\n    subscription_update_response: {\n      anyOf: [        {\n          type: 'object',\n          additionalProperties: true\n        },\n        {\n          type: 'string'\n        }\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      identifier: {
        type: 'string',
        description: 'Subscription identifier tag.',
      },
      frequency: {
        type: 'string',
        description: 'How often the subscription is renewed automatically.',
        enum: ['weekly', 'monthly', 'quarterly', 'yearly'],
      },
      rate_plan: {
        $ref: '#/$defs/rate_plan',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['identifier'],
    $defs: {
      rate_plan: {
        type: 'object',
        description: 'The rate plan applied to the subscription.',
        properties: {
          id: {
            type: 'string',
            description: 'The ID of the rate plan.',
            enum: [
              'free',
              'lite',
              'pro',
              'pro_plus',
              'business',
              'enterprise',
              'partners_free',
              'partners_pro',
              'partners_business',
              'partners_enterprise',
            ],
          },
          currency: {
            type: 'string',
            description: 'The currency applied to the rate plan subscription.',
          },
          externally_managed: {
            type: 'boolean',
            description: 'Whether this rate plan is managed externally from Cloudflare.',
          },
          is_contract: {
            type: 'boolean',
            description: 'Whether a rate plan is enterprise-based (or newly adopted term contract).',
          },
          public_name: {
            type: 'string',
            description: 'The full name of the rate plan.',
          },
          scope: {
            type: 'string',
            description: 'The scope that this rate plan applies to.',
          },
          sets: {
            type: 'array',
            description: 'The list of sets this rate plan applies to. Returns array of strings.',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identifier, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.user.subscriptions.update(identifier, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
