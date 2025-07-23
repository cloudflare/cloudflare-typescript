// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.email.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/dlp/email/rules/{rule_id}',
  operationId: 'dlp-email-scanner-update-rule',
};

export const tool: Tool = {
  name: 'update_email_dlp_zero_trust_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate email scanner rule\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        action: {\n          type: 'object',\n          properties: {\n            action: {\n              type: 'string',\n              enum: [                'Block'\n              ]\n            },\n            message: {\n              type: 'string'\n            }\n          },\n          required: [            'action'\n          ]\n        },\n        conditions: {\n          type: 'array',\n          description: 'Rule is triggered if all conditions match.',\n          items: {\n            type: 'object',\n            properties: {\n              operator: {\n                type: 'string',\n                enum: [                  'InList',\n                  'NotInList',\n                  'MatchRegex',\n                  'NotMatchRegex'\n                ]\n              },\n              selector: {\n                type: 'string',\n                enum: [                  'Recipients',\n                  'Sender',\n                  'DLPProfiles'\n                ]\n              },\n              value: {\n                anyOf: [                  {\n                    type: 'array',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  {\n                    type: 'string'\n                  }\n                ]\n              }\n            },\n            required: [              'operator',\n              'selector',\n              'value'\n            ]\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        enabled: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        priority: {\n          type: 'integer'\n        },\n        rule_id: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string'\n        }\n      },\n      required: [        'action',\n        'conditions',\n        'created_at',\n        'enabled',\n        'name',\n        'priority',\n        'rule_id',\n        'updated_at'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      rule_id: {
        type: 'string',
      },
      action: {
        type: 'object',
        properties: {
          action: {
            type: 'string',
            enum: ['Block'],
          },
          message: {
            type: 'string',
          },
        },
        required: ['action'],
      },
      conditions: {
        type: 'array',
        description: 'Rule is triggered if all conditions match.',
        items: {
          type: 'object',
          properties: {
            operator: {
              type: 'string',
              enum: ['InList', 'NotInList', 'MatchRegex', 'NotMatchRegex'],
            },
            selector: {
              type: 'string',
              enum: ['Recipients', 'Sender', 'DLPProfiles'],
            },
            value: {
              anyOf: [
                {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                {
                  type: 'string',
                },
              ],
            },
          },
          required: ['operator', 'selector', 'value'],
        },
      },
      enabled: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'rule_id', 'action', 'conditions', 'enabled', 'name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.dlp.email.rules.update(rule_id, body)),
  );
};

export default { metadata, tool, handler };
