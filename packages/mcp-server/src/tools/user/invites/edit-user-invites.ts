// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.invites',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/user/invites/{invite_id}',
  operationId: "user'-s-invites-respond-to-invitation",
};

export const tool: Tool = {
  name: 'edit_user_invites',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nResponds to an invitation.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/invite'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    invite: {\n      type: 'object',\n      properties: {\n        invited_member_id: {\n          type: 'string',\n          description: 'ID of the user to add to the organization.'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'ID of the organization the user will be added to.'\n        },\n        id: {\n          type: 'string',\n          description: 'Invite identifier tag.'\n        },\n        expires_on: {\n          type: 'string',\n          description: 'When the invite is no longer active.',\n          format: 'date-time'\n        },\n        invited_by: {\n          type: 'string',\n          description: 'The email address of the user who created the invite.'\n        },\n        invited_member_email: {\n          type: 'string',\n          description: 'Email address of the user to add to the organization.'\n        },\n        invited_on: {\n          type: 'string',\n          description: 'When the invite was sent.',\n          format: 'date-time'\n        },\n        organization_is_enforcing_twofactor: {\n          type: 'boolean'\n        },\n        organization_name: {\n          type: 'string',\n          description: 'Organization name.'\n        },\n        roles: {\n          type: 'array',\n          description: 'List of role names the membership has for this account.',\n          items: {\n            type: 'string'\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Current status of the invitation.',\n          enum: [            'pending',\n            'accepted',\n            'rejected',\n            'expired'\n          ]\n        }\n      },\n      required: [        'invited_member_id',\n        'organization_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      invite_id: {
        type: 'string',
        description: 'Invite identifier tag.',
      },
      status: {
        type: 'string',
        description: 'Status of your response to the invitation (rejected or accepted).',
        enum: ['accepted', 'rejected'],
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
  const { invite_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.user.invites.edit(invite_id, body)));
};

export default { metadata, tool, handler };
