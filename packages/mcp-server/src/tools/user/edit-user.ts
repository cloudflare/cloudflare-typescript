// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/user',
  operationId: 'user-edit-user',
};

export const tool: Tool = {
  name: 'edit_user',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEdit part of your user details.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier of the user.'\n        },\n        betas: {\n          type: 'array',\n          description: 'Lists the betas that the user is participating in.',\n          items: {\n            type: 'string',\n            description: 'User feature flag'\n          }\n        },\n        country: {\n          type: 'string',\n          description: 'The country in which the user lives.'\n        },\n        first_name: {\n          type: 'string',\n          description: 'User\\'s first name'\n        },\n        has_business_zones: {\n          type: 'boolean',\n          description: 'Indicates whether user has any business zones'\n        },\n        has_enterprise_zones: {\n          type: 'boolean',\n          description: 'Indicates whether user has any enterprise zones'\n        },\n        has_pro_zones: {\n          type: 'boolean',\n          description: 'Indicates whether user has any pro zones'\n        },\n        last_name: {\n          type: 'string',\n          description: 'User\\'s last name'\n        },\n        organizations: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/organization'\n          }\n        },\n        suspended: {\n          type: 'boolean',\n          description: 'Indicates whether user has been suspended'\n        },\n        telephone: {\n          type: 'string',\n          description: 'User\\'s telephone number'\n        },\n        two_factor_authentication_enabled: {\n          type: 'boolean',\n          description: 'Indicates whether two-factor authentication is enabled for the user account. Does not apply to API authentication.'\n        },\n        two_factor_authentication_locked: {\n          type: 'boolean',\n          description: 'Indicates whether two-factor authentication is required by one of the accounts that the user is a member of.'\n        },\n        zipcode: {\n          type: 'string',\n          description: 'The zipcode or postal code where the user lives.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    organization: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        name: {\n          type: 'string',\n          description: 'Organization name.'\n        },\n        permissions: {\n          type: 'array',\n          description: 'Access permissions for this User.',\n          items: {\n            $ref: '#/$defs/permission'\n          }\n        },\n        roles: {\n          type: 'array',\n          description: 'List of roles that a user has within an organization.',\n          items: {\n            type: 'string'\n          }\n        },\n        status: {\n          $ref: '#/$defs/status'\n        }\n      },\n      required: []\n    },\n    permission: {\n      type: 'string'\n    },\n    status: {\n      type: 'string',\n      description: 'Whether the user is a member of the organization or has an invitation pending.',\n      enum: [        'member',\n        'invited'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      country: {
        type: 'string',
        description: 'The country in which the user lives.',
      },
      first_name: {
        type: 'string',
        description: "User's first name",
      },
      last_name: {
        type: 'string',
        description: "User's last name",
      },
      telephone: {
        type: 'string',
        description: "User's telephone number",
      },
      zipcode: {
        type: 'string',
        description: 'The zipcode or postal code where the user lives.',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.user.edit(body)));
};

export default { metadata, tool, handler };
