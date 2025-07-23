// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zaraz.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/settings/zaraz/history',
  operationId: 'get-zones-zone_identifier-zaraz-history',
};

export const tool: Tool = {
  name: 'list_zaraz_history',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists a history of published Zaraz configuration records for a zone.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer',\n            description: 'ID of the configuration'\n          },\n          createdAt: {\n            type: 'string',\n            description: 'Date and time the configuration was created',\n            format: 'date-time'\n          },\n          description: {\n            type: 'string',\n            description: 'Configuration description provided by the user who published this configuration'\n          },\n          updatedAt: {\n            type: 'string',\n            description: 'Date and time the configuration was last updated',\n            format: 'date-time'\n          },\n          userId: {\n            type: 'string',\n            description: 'Alpha-numeric ID of the account user who published the configuration'\n          }\n        },\n        required: [          'id',\n          'createdAt',\n          'description',\n          'updatedAt',\n          'userId'\n        ]\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      limit: {
        type: 'integer',
        description: 'Maximum amount of results to list. Default value is 10.',
      },
      offset: {
        type: 'integer',
        description: 'Ordinal number to start listing the results with. Default value is 0.',
      },
      sortField: {
        type: 'string',
        description: 'The field to sort by. Default is updated_at.',
        enum: ['id', 'user_id', 'description', 'created_at', 'updated_at'],
      },
      sortOrder: {
        type: 'string',
        description: 'Sorting order. Default is DESC.',
        enum: ['DESC', 'ASC'],
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
  const body = args as any;
  const response = await client.zaraz.history.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
