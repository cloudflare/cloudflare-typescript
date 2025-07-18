// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.tokens',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/tokens',
  operationId: 'user-api-tokens-list-tokens',
};

export const tool: Tool = {
  name: 'list_user_tokens',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all access tokens you created.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Response with a list of tokens',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/token'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    token: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Token identifier tag.'\n        },\n        condition: {\n          type: 'object',\n          properties: {\n            request_ip: {\n              type: 'object',\n              description: 'Client IP restrictions.',\n              properties: {\n                in: {\n                  type: 'array',\n                  description: 'List of IPv4/IPv6 CIDR addresses.',\n                  items: {\n                    $ref: '#/$defs/token_condition_cidr_list'\n                  }\n                },\n                not_in: {\n                  type: 'array',\n                  description: 'List of IPv4/IPv6 CIDR addresses.',\n                  items: {\n                    $ref: '#/$defs/token_condition_cidr_list'\n                  }\n                }\n              }\n            }\n          }\n        },\n        expires_on: {\n          type: 'string',\n          description: 'The expiration time on or after which the JWT MUST NOT be accepted for processing.',\n          format: 'date-time'\n        },\n        issued_on: {\n          type: 'string',\n          description: 'The time on which the token was created.',\n          format: 'date-time'\n        },\n        last_used_on: {\n          type: 'string',\n          description: 'Last time the token was used.',\n          format: 'date-time'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Last time the token was modified.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Token name.'\n        },\n        not_before: {\n          type: 'string',\n          description: 'The time before which the token MUST NOT be accepted for processing.',\n          format: 'date-time'\n        },\n        policies: {\n          type: 'array',\n          description: 'List of access policies assigned to the token.',\n          items: {\n            $ref: '#/$defs/token_policy'\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the token.',\n          enum: [            'active',\n            'disabled',\n            'expired'\n          ]\n        }\n      }\n    },\n    token_condition_cidr_list: {\n      type: 'string',\n      description: 'IPv4/IPv6 CIDR.'\n    },\n    token_policy: {\n      type: 'object',\n      title: 'Policy with Permission Groups and Resources',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Policy identifier.'\n        },\n        effect: {\n          type: 'string',\n          description: 'Allow or deny operations against the resources.',\n          enum: [            'allow',\n            'deny'\n          ]\n        },\n        permission_groups: {\n          type: 'array',\n          description: 'A set of permission groups that are specified to the policy.',\n          items: {\n            type: 'object',\n            description: 'A named group of permissions that map to a group of operations against resources.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifier of the permission group.'\n              },\n              meta: {\n                type: 'object',\n                description: 'Attributes associated to the permission group.',\n                properties: {\n                  key: {\n                    type: 'string'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the permission group.'\n              }\n            },\n            required: [              'id'\n            ]\n          }\n        },\n        resources: {\n          type: 'object',\n          description: 'A list of resource names that the policy applies to.'\n        }\n      },\n      required: [        'id',\n        'effect',\n        'permission_groups',\n        'resources'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      direction: {
        type: 'string',
        description: 'Direction to order results.',
        enum: ['asc', 'desc'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of results per page.',
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
  const response = await client.user.tokens.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
