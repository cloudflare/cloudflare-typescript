// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'secrets_store.stores.secrets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}',
  operationId: 'secrets-store-get-by-id',
};

export const tool: Tool = {
  name: 'get_stores_secrets_store_secrets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns details of a single secret\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/secret_get_response',\n  $defs: {\n    secret_get_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Secret identifier tag.'\n        },\n        created: {\n          type: 'string',\n          description: 'Whenthe secret was created.',\n          format: 'date-time'\n        },\n        modified: {\n          type: 'string',\n          description: 'When the secret was modified.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the secret'\n        },\n        status: {\n          type: 'string',\n          enum: [            'pending',\n            'active',\n            'deleted'\n          ]\n        },\n        store_id: {\n          type: 'string',\n          description: 'Store Identifier'\n        },\n        comment: {\n          type: 'string',\n          description: 'Freeform text describing the secret'\n        }\n      },\n      required: [        'id',\n        'created',\n        'modified',\n        'name',\n        'status',\n        'store_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account Identifier',
      },
      store_id: {
        type: 'string',
        description: 'Store Identifier',
      },
      secret_id: {
        type: 'string',
        description: 'Secret identifier tag.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'store_id', 'secret_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { secret_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.secretsStore.stores.secrets.get(secret_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
