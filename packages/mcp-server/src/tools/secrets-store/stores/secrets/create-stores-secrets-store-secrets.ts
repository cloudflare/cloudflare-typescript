// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'secrets_store.stores.secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/secrets_store/stores/{store_id}/secrets',
  operationId: 'secrets-store-secret-create',
};

export const tool: Tool = {
  name: 'create_stores_secrets_store_secrets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a secret in the account\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Secret identifier tag.'\n          },\n          created: {\n            type: 'string',\n            description: 'Whenthe secret was created.',\n            format: 'date-time'\n          },\n          modified: {\n            type: 'string',\n            description: 'When the secret was modified.',\n            format: 'date-time'\n          },\n          name: {\n            type: 'string',\n            description: 'The name of the secret'\n          },\n          status: {\n            type: 'string',\n            enum: [              'pending',\n              'active',\n              'deleted'\n            ]\n          },\n          store_id: {\n            type: 'string',\n            description: 'Store Identifier'\n          },\n          comment: {\n            type: 'string',\n            description: 'Freeform text describing the secret'\n          }\n        },\n        required: [          'id',\n          'created',\n          'modified',\n          'name',\n          'status',\n          'store_id'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
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
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the secret',
            },
            scopes: {
              type: 'array',
              description: 'The list of services that can use this secret.',
              items: {
                type: 'string',
              },
            },
            value: {
              type: 'string',
              description:
                "The value of the secret. Note that this is 'write only' - no API reponse will provide this value, it is only used to create/modify secrets.",
            },
            comment: {
              type: 'string',
              description: 'Freeform text describing the secret',
            },
          },
          required: ['name', 'scopes', 'value'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'store_id', 'body'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { store_id, ...body } = args as any;
  const response = await client.secretsStore.stores.secrets.create(store_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
