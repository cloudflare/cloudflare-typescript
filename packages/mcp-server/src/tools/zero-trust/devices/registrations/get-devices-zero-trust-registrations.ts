// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.registrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/registrations/{registration_id}',
  operationId: 'get-registration',
};

export const tool: Tool = {
  name: 'get_devices_zero_trust_registrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a single WARP registration.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A message which can be returned in either the \\'errors\\' or \\'messages\\' fields in a v4 API response.',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A message which can be returned in either the \\'errors\\' or \\'messages\\' fields in a v4 API response.',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'object',\n      description: 'A WARP configuration tied to a single user. Multiple registrations can be created from a single WARP device.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the registration.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The RFC3339 timestamp when the registration was created.'\n        },\n        device: {\n          type: 'object',\n          description: 'Device details embedded inside of a registration.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the device.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the device.'\n            },\n            client_version: {\n              type: 'string',\n              description: 'Version of the WARP client.'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        key: {\n          type: 'string',\n          description: 'The public key used to connect to the Cloudflare network.'\n        },\n        last_seen_at: {\n          type: 'string',\n          description: 'The RFC3339 timestamp when the registration was last seen.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The RFC3339 timestamp when the registration was last updated.'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'The RFC3339 timestamp when the registration was deleted.'\n        },\n        key_type: {\n          type: 'string',\n          description: 'The type of encryption key used by the WARP client for the active key. Currently \\'curve25519\\' for WireGuard and \\'secp256r1\\' for MASQUE.'\n        },\n        revoked_at: {\n          type: 'string',\n          description: 'The RFC3339 timestamp when the registration was revoked.'\n        },\n        tunnel_type: {\n          type: 'string',\n          description: 'Type of the tunnel - wireguard or masque.'\n        },\n        user: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'UUID.'\n            },\n            email: {\n              type: 'string',\n              description: 'The contact email address of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The enrolled device user\\'s name.'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'device',\n        'key',\n        'last_seen_at',\n        'updated_at'\n      ]\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      registration_id: {
        type: 'string',
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
  const { registration_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.devices.registrations.get(registration_id, body)),
  );
};

export default { metadata, tool, handler };
