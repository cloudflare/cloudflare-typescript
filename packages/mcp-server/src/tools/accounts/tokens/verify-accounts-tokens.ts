// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.tokens',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/tokens/verify',
  operationId: 'account-api-tokens-verify-token',
};

export const tool: Tool = {
  name: 'verify_accounts_tokens',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTest whether a token works.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/token_verify_response',\n  $defs: {\n    token_verify_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Token identifier tag.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the token.',\n          enum: [            'active',\n            'disabled',\n            'expired'\n          ]\n        },\n        expires_on: {\n          type: 'string',\n          description: 'The expiration time on or after which the JWT MUST NOT be accepted for processing.',\n          format: 'date-time'\n        },\n        not_before: {\n          type: 'string',\n          description: 'The time before which the token MUST NOT be accepted for processing.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.accounts.tokens.verify(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
