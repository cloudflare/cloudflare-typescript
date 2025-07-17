// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.organizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/organizations',
  operationId: "user'-s-organizations-list-organizations",
};

export const tool: Tool = {
  name: 'list_user_organizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists organizations the user is associated with.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/organization'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    organization: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        name: {\n          type: 'string',\n          description: 'Organization name.'\n        },\n        permissions: {\n          type: 'array',\n          description: 'Access permissions for this User.',\n          items: {\n            $ref: '#/$defs/permission'\n          }\n        },\n        roles: {\n          type: 'array',\n          description: 'List of roles that a user has within an organization.',\n          items: {\n            type: 'string'\n          }\n        },\n        status: {\n          $ref: '#/$defs/status'\n        }\n      }\n    },\n    permission: {\n      type: 'string'\n    },\n    status: {\n      type: 'string',\n      description: 'Whether the user is a member of the organization or has an invitation pending.',\n      enum: [        'member',\n        'invited'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      direction: {
        type: 'string',
        description: 'Direction to order organizations.',
        enum: ['asc', 'desc'],
      },
      match: {
        type: 'string',
        description: 'Whether to match all search requirements or at least one (any).',
        enum: ['any', 'all'],
      },
      name: {
        type: 'string',
        description: 'Organization name.',
      },
      order: {
        type: 'string',
        description: 'Field to order organizations by.',
        enum: ['id', 'name', 'status'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of organizations per page.',
      },
      status: {
        type: 'string',
        description: 'Whether the user is a member of the organization or has an inivitation pending.',
        enum: ['member', 'invited'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.user.organizations.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
