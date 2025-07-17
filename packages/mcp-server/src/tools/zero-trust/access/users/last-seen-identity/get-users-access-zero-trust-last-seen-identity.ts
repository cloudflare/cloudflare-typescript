// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.users.last_seen_identity',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/users/{user_id}/last_seen_identity',
  operationId: 'zero-trust-users-get-last-seen-identity',
};

export const tool: Tool = {
  name: 'get_users_access_zero_trust_last_seen_identity',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet last seen identity for a single user.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/identity'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    identity: {\n      type: 'object',\n      properties: {\n        account_id: {\n          type: 'string'\n        },\n        auth_status: {\n          type: 'string'\n        },\n        common_name: {\n          type: 'string'\n        },\n        device_id: {\n          type: 'string'\n        },\n        device_sessions: {\n          type: 'object'\n        },\n        devicePosture: {\n          type: 'object'\n        },\n        email: {\n          type: 'string'\n        },\n        geo: {\n          $ref: '#/$defs/user_policy_check_geo'\n        },\n        iat: {\n          type: 'number'\n        },\n        idp: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            type: {\n              type: 'string'\n            }\n          }\n        },\n        ip: {\n          type: 'string'\n        },\n        is_gateway: {\n          type: 'boolean'\n        },\n        is_warp: {\n          type: 'boolean'\n        },\n        mtls_auth: {\n          type: 'object',\n          properties: {\n            auth_status: {\n              type: 'string'\n            },\n            cert_issuer_dn: {\n              type: 'string'\n            },\n            cert_issuer_ski: {\n              type: 'string'\n            },\n            cert_presented: {\n              type: 'boolean'\n            },\n            cert_serial: {\n              type: 'string'\n            }\n          }\n        },\n        service_token_id: {\n          type: 'string'\n        },\n        service_token_status: {\n          type: 'boolean'\n        },\n        user_uuid: {\n          type: 'string'\n        },\n        version: {\n          type: 'number'\n        }\n      }\n    },\n    user_policy_check_geo: {\n      type: 'object',\n      properties: {\n        country: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      user_id: {
        type: 'string',
        description: 'UUID.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'user_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { user_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.access.users.lastSeenIdentity.get(user_id, body)),
  );
};

export default { metadata, tool, handler };
