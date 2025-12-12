// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_search.tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/ai-search/tokens',
  operationId: 'ai-search-create-tokens',
};

export const tool: Tool = {
  name: 'create_aisearch_tokens',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate new tokens.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/token_create_response',\n  $defs: {\n    token_create_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        account_id: {\n          type: 'string'\n        },\n        account_tag: {\n          type: 'string'\n        },\n        cf_api_id: {\n          type: 'string'\n        },\n        cf_api_key: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        modified_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string'\n        },\n        created_by: {\n          type: 'string'\n        },\n        enabled: {\n          type: 'boolean'\n        },\n        legacy: {\n          type: 'boolean'\n        },\n        modified_by: {\n          type: 'string'\n        },\n        synced_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'account_id',\n        'account_tag',\n        'cf_api_id',\n        'cf_api_key',\n        'created_at',\n        'modified_at',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      cf_api_id: {
        type: 'string',
      },
      cf_api_key: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      legacy: {
        type: 'boolean',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'cf_api_id', 'cf_api_key', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.aiSearch.tokens.create(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
