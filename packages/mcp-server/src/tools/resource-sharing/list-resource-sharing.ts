// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/shares',
  operationId: 'shares-list',
};

export const tool: Tool = {
  name: 'list_resource_sharing',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all account shares.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Share identifier tag.'\n          },\n          account_id: {\n            type: 'string',\n            description: 'Account identifier.'\n          },\n          account_name: {\n            type: 'string',\n            description: 'The display name of an account.'\n          },\n          created: {\n            type: 'string',\n            description: 'When the share was created.',\n            format: 'date-time'\n          },\n          modified: {\n            type: 'string',\n            description: 'When the share was modified.',\n            format: 'date-time'\n          },\n          name: {\n            type: 'string',\n            description: 'The name of the share.'\n          },\n          organization_id: {\n            type: 'string',\n            description: 'Organization identifier.'\n          },\n          status: {\n            type: 'string',\n            enum: [              'active',\n              'deleting',\n              'deleted'\n            ]\n          },\n          target_type: {\n            type: 'string',\n            enum: [              'account',\n              'organization'\n            ]\n          },\n          kind: {\n            type: 'string',\n            enum: [              'sent',\n              'received'\n            ]\n          }\n        },\n        required: [          'id',\n          'account_id',\n          'account_name',\n          'created',\n          'modified',\n          'name',\n          'organization_id',\n          'status',\n          'target_type'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        },\n        total_pages: {\n          type: 'number',\n          description: 'Total number of pages using the given per page.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier.',
      },
      direction: {
        type: 'string',
        description: 'Direction to sort objects.',
        enum: ['asc', 'desc'],
      },
      kind: {
        type: 'string',
        description: 'Filter shares by kind.',
        enum: ['sent', 'received'],
      },
      order: {
        type: 'string',
        description: 'Order shares by values in the given field.',
        enum: ['name', 'created'],
      },
      page: {
        type: 'integer',
        description: 'Page number.',
      },
      per_page: {
        type: 'integer',
        description: 'Number of objects to return per page.',
      },
      status: {
        type: 'string',
        description: 'Filter shares by status.',
        enum: ['active', 'deleting', 'deleted'],
      },
      target_type: {
        type: 'string',
        description: 'Filter shares by target_type.',
        enum: ['account', 'organization'],
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
  const body = args as any;
  const response = await client.resourceSharing.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
