// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.registrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/registrations',
  operationId: 'list-registrations',
};

export const tool: Tool = {
  name: 'list_devices_zero_trust_registrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists WARP registrations.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A message which can be returned in either the \\'errors\\' or \\'messages\\' fields in a v4 API response.',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A message which can be returned in either the \\'errors\\' or \\'messages\\' fields in a v4 API response.',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A WARP configuration tied to a single user. Multiple registrations can be created from a single WARP device.',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'The ID of the registration.'\n          },\n          created_at: {\n            type: 'string',\n            description: 'The RFC3339 timestamp when the registration was created.'\n          },\n          device: {\n            type: 'object',\n            description: 'Device details embedded inside of a registration.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The ID of the device.'\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the device.'\n              },\n              client_version: {\n                type: 'string',\n                description: 'Version of the WARP client.'\n              }\n            },\n            required: [              'id',\n              'name'\n            ]\n          },\n          key: {\n            type: 'string',\n            description: 'The public key used to connect to the Cloudflare network.'\n          },\n          last_seen_at: {\n            type: 'string',\n            description: 'The RFC3339 timestamp when the registration was last seen.'\n          },\n          updated_at: {\n            type: 'string',\n            description: 'The RFC3339 timestamp when the registration was last updated.'\n          },\n          deleted_at: {\n            type: 'string',\n            description: 'The RFC3339 timestamp when the registration was deleted.'\n          },\n          key_type: {\n            type: 'string',\n            description: 'The type of encryption key used by the WARP client for the active key. Currently \\'curve25519\\' for WireGuard and \\'secp256r1\\' for MASQUE.'\n          },\n          revoked_at: {\n            type: 'string',\n            description: 'The RFC3339 timestamp when the registration was revoked.'\n          },\n          tunnel_type: {\n            type: 'string',\n            description: 'Type of the tunnel - wireguard or masque.'\n          },\n          user: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'UUID.'\n              },\n              email: {\n                type: 'string',\n                description: 'The contact email address of the user.'\n              },\n              name: {\n                type: 'string',\n                description: 'The enrolled device user\\'s name.'\n              }\n            }\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'device',\n          'key',\n          'last_seen_at',\n          'updated_at'\n        ]\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result_info: {\n      type: 'object',\n      description: 'V4 public API Pagination/Cursor info.',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Number of records in the response.'\n        },\n        cursor: {\n          type: 'string',\n          description: 'Opaque token to request the next set of records.'\n        },\n        per_page: {\n          type: 'integer',\n          description: 'The limit for the number of records in the response.'\n        },\n        total_count: {\n          type: 'integer',\n          description: 'Total number of records available.'\n        }\n      },\n      required: [        'count',\n        'cursor',\n        'per_page'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'array',
        description: 'Filter by registration ID.',
        items: {
          type: 'string',
        },
      },
      cursor: {
        type: 'string',
        description:
          'Opaque token indicating the starting position when requesting the next set of records. A cursor value can be obtained from the result_info.cursor field in the response.',
      },
      device: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Filter by WARP device ID.',
          },
        },
      },
      include: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
        description: 'The maximum number of devices to return in a single response.',
      },
      search: {
        type: 'string',
        description: 'Filter by registration details.',
      },
      seen_after: {
        type: 'string',
        description:
          'Filter by the last_seen timestamp - returns only registrations last seen after this timestamp.',
      },
      seen_before: {
        type: 'string',
        description:
          'Filter by the last_seen timestamp - returns only registrations last seen before this timestamp.',
      },
      sort_by: {
        type: 'string',
        description: 'The registration field to order results by.',
        enum: ['id', 'user.name', 'user.email', 'last_seen_at', 'created_at'],
      },
      sort_order: {
        type: 'string',
        description: 'Sort direction.',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'string',
        description: "Filter by registration status. Defaults to 'active'.",
        enum: ['active', 'all', 'revoked'],
      },
      user: {
        type: 'object',
        properties: {
          id: {
            type: 'array',
            description: 'Filter by user ID.',
            items: {
              type: 'string',
            },
          },
        },
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
  const response = await client.zeroTrust.devices.registrations.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
