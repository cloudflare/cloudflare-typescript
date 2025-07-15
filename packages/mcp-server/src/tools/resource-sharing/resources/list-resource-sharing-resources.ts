// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing.resources',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/shares/{share_id}/resources',
  operationId: 'share-resources-list',
};

export const tool: Tool = {
  name: 'list_resource_sharing_resources',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList share resources by share ID.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Share Resource identifier.'\n          },\n          created: {\n            type: 'string',\n            description: 'When the share was created.',\n            format: 'date-time'\n          },\n          meta: {\n            type: 'object',\n            description: 'Resource Metadata.'\n          },\n          modified: {\n            type: 'string',\n            description: 'When the share was modified.',\n            format: 'date-time'\n          },\n          resource_account_id: {\n            type: 'string',\n            description: 'Account identifier.'\n          },\n          resource_id: {\n            type: 'string',\n            description: 'Share Resource identifier.'\n          },\n          resource_type: {\n            type: 'string',\n            description: 'Resource Type.',\n            enum: [              'custom-ruleset',\n              'widget'\n            ]\n          },\n          resource_version: {\n            type: 'integer',\n            description: 'Resource Version.'\n          },\n          status: {\n            type: 'string',\n            description: 'Resource Status.',\n            enum: [              'active',\n              'deleting',\n              'deleted'\n            ]\n          }\n        },\n        required: [          'id',\n          'created',\n          'meta',\n          'modified',\n          'resource_account_id',\n          'resource_id',\n          'resource_type',\n          'resource_version',\n          'status'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        },\n        total_pages: {\n          type: 'number',\n          description: 'Total number of pages using the given per page.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier.',
      },
      share_id: {
        type: 'string',
        description: 'Share identifier tag.',
      },
      page: {
        type: 'integer',
        description: 'Page number.',
      },
      per_page: {
        type: 'integer',
        description: 'Number of objects to return per page.',
      },
      resource_type: {
        type: 'string',
        description: 'Filter share resources by resource_type.',
        enum: ['custom-ruleset', 'widget'],
      },
      status: {
        type: 'string',
        description: 'Filter share resources by status.',
        enum: ['active', 'deleting', 'deleted'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { share_id, ...body } = args as any;
  const response = await client.resourceSharing.resources.list(share_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
