// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/{device_id}',
  operationId: 'devices-device-details',
};

export const tool: Tool = {
  name: 'get_zero_trust_devices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a single WARP device. Not supported when [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/) is enabled for the account.\n\n**Deprecated**: please use one of the following endpoints instead:\n- GET /accounts/{account_id}/devices/physical-devices/{device_id}\n- GET /accounts/{account_id}/devices/registrations/{registration_id}\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Registration ID. Equal to Device ID except for accounts which enabled [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/).'\n        },\n        account: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            account_type: {\n              type: 'string'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the enrolled account.'\n            }\n          }\n        },\n        created: {\n          type: 'string',\n          description: 'When the device was created.',\n          format: 'date-time'\n        },\n        deleted: {\n          type: 'boolean',\n          description: 'True if the device was deleted.'\n        },\n        device_type: {\n          type: 'string'\n        },\n        gateway_device_id: {\n          type: 'string'\n        },\n        ip: {\n          type: 'string',\n          description: 'IPv4 or IPv6 address.'\n        },\n        key: {\n          type: 'string',\n          description: 'The device\\'s public key.'\n        },\n        key_type: {\n          type: 'string',\n          description: 'Type of the key.'\n        },\n        last_seen: {\n          type: 'string',\n          description: 'When the device last connected to Cloudflare services.',\n          format: 'date-time'\n        },\n        mac_address: {\n          type: 'string',\n          description: 'The device mac address.'\n        },\n        model: {\n          type: 'string',\n          description: 'The device model name.'\n        },\n        name: {\n          type: 'string',\n          description: 'The device name.'\n        },\n        os_version: {\n          type: 'string',\n          description: 'The operating system version.'\n        },\n        serial_number: {\n          type: 'string',\n          description: 'The device serial number.'\n        },\n        tunnel_type: {\n          type: 'string',\n          description: 'Type of the tunnel connection used.'\n        },\n        updated: {\n          type: 'string',\n          description: 'When the device was updated.',\n          format: 'date-time'\n        },\n        user: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'UUID.'\n            },\n            email: {\n              type: 'string',\n              description: 'The contact email address of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The enrolled device user\\'s name.'\n            }\n          }\n        },\n        version: {\n          type: 'string',\n          description: 'The WARP client version.'\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      device_id: {
        type: 'string',
        description:
          'Registration ID. Equal to Device ID except for accounts which enabled [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/).',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'device_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { device_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.zeroTrust.devices.get(device_id, body)));
};

export default { metadata, tool, handler };
