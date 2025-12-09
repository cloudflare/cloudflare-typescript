// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.email.account_mapping',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/email/account_mapping',
  operationId: 'dlp-email-scanner-create-account-mapping',
};

export const tool: Tool = {
  name: 'create_email_dlp_zero_trust_account_mapping',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate mapping\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/account_mapping_create_response',\n  $defs: {\n    account_mapping_create_response: {\n      type: 'object',\n      properties: {\n        addin_identifier_token: {\n          type: 'string'\n        },\n        auth_requirements: {\n          anyOf: [            {\n              type: 'object',\n              properties: {\n                allowed_microsoft_organizations: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                type: {\n                  type: 'string',\n                  enum: [                    'Org'\n                  ]\n                }\n              },\n              required: [                'allowed_microsoft_organizations',\n                'type'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                type: {\n                  type: 'string',\n                  enum: [                    'NoAuth'\n                  ]\n                }\n              },\n              required: [                'type'\n              ]\n            }\n          ]\n        }\n      },\n      required: [        'addin_identifier_token',\n        'auth_requirements'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      auth_requirements: {
        anyOf: [
          {
            type: 'object',
            properties: {
              allowed_microsoft_organizations: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              type: {
                type: 'string',
                enum: ['Org'],
              },
            },
            required: ['allowed_microsoft_organizations', 'type'],
          },
          {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                enum: ['NoAuth'],
              },
            },
            required: ['type'],
          },
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'auth_requirements'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.dlp.email.accountMapping.create(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
