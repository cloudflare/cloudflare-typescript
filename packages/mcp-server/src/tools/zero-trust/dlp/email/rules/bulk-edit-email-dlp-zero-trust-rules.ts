// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.email.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/dlp/email/rules',
  operationId: 'dlp-email-scanner-update-rule-priorities',
};

export const tool: Tool = {
  name: 'bulk_edit_email_dlp_zero_trust_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate email scanner rule priorities\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/rule_bulk_edit_response',\n  $defs: {\n    rule_bulk_edit_response: {\n      type: 'object',\n      properties: {\n        action: {\n          type: 'object',\n          properties: {\n            action: {\n              type: 'string',\n              enum: [                'Block'\n              ]\n            },\n            message: {\n              type: 'string'\n            }\n          },\n          required: [            'action'\n          ]\n        },\n        conditions: {\n          type: 'array',\n          description: 'Rule is triggered if all conditions match.',\n          items: {\n            type: 'object',\n            properties: {\n              operator: {\n                type: 'string',\n                enum: [                  'InList',\n                  'NotInList',\n                  'MatchRegex',\n                  'NotMatchRegex'\n                ]\n              },\n              selector: {\n                type: 'string',\n                enum: [                  'Recipients',\n                  'Sender',\n                  'DLPProfiles'\n                ]\n              },\n              value: {\n                anyOf: [                  {\n                    type: 'array',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  {\n                    type: 'string'\n                  }\n                ]\n              }\n            },\n            required: [              'operator',\n              'selector',\n              'value'\n            ]\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        enabled: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        priority: {\n          type: 'integer'\n        },\n        rule_id: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string'\n        }\n      },\n      required: [        'action',\n        'conditions',\n        'created_at',\n        'enabled',\n        'name',\n        'priority',\n        'rule_id',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      new_priorities: {
        type: 'object',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'new_priorities'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.dlp.email.rules.bulkEdit(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
