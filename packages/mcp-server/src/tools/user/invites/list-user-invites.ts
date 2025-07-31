// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.invites',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/invites',
  operationId: "user'-s-invites-list-invitations",
};

export const tool: Tool = {
  name: 'list_user_invites',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all invitations associated with my user.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/invite'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    invite: {\n      type: 'object',\n      properties: {\n        invited_member_id: {\n          type: 'string',\n          description: 'ID of the user to add to the organization.'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'ID of the organization the user will be added to.'\n        },\n        id: {\n          type: 'string',\n          description: 'Invite identifier tag.'\n        },\n        expires_on: {\n          type: 'string',\n          description: 'When the invite is no longer active.',\n          format: 'date-time'\n        },\n        invited_by: {\n          type: 'string',\n          description: 'The email address of the user who created the invite.'\n        },\n        invited_member_email: {\n          type: 'string',\n          description: 'Email address of the user to add to the organization.'\n        },\n        invited_on: {\n          type: 'string',\n          description: 'When the invite was sent.',\n          format: 'date-time'\n        },\n        organization_is_enforcing_twofactor: {\n          type: 'boolean'\n        },\n        organization_name: {\n          type: 'string',\n          description: 'Organization name.'\n        },\n        roles: {\n          type: 'array',\n          description: 'List of role names the membership has for this account.',\n          items: {\n            type: 'string'\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Current status of the invitation.',\n          enum: [            'pending',\n            'accepted',\n            'rejected',\n            'expired'\n          ]\n        }\n      },\n      required: [        'invited_member_id',\n        'organization_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  const response = await client.user.invites.list().asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
