// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.devices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/physical-devices/{device_id}',
  operationId: 'get-device',
};

export const tool: Tool = {
  name: 'get_devices_zero_trust_devices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a single WARP device.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A message which can be returned in either the \\'errors\\' or \\'messages\\' fields in a v4 API response.',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A message which can be returned in either the \\'errors\\' or \\'messages\\' fields in a v4 API response.',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'object',\n      description: 'A WARP Device.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique ID of the device.'\n        },\n        active_registrations: {\n          type: 'integer',\n          description: 'The number of active registrations for the device. Active registrations are those which haven\\'t been revoked or deleted.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The RFC3339 timestamp when the device was created.'\n        },\n        last_seen_at: {\n          type: 'string',\n          description: 'The RFC3339 timestamp when the device was last seen.'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the device.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The RFC3339 timestamp when the device was last updated.'\n        },\n        client_version: {\n          type: 'string',\n          description: 'Version of the WARP client.'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'The RFC3339 timestamp when the device was deleted.'\n        },\n        device_type: {\n          type: 'string',\n          description: 'The device operating system.'\n        },\n        hardware_id: {\n          type: 'string',\n          description: 'A string that uniquely identifies the hardware or virtual machine (VM).'\n        },\n        last_seen_user: {\n          type: 'object',\n          description: 'The last user to use the WARP device.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'UUID.'\n            },\n            email: {\n              type: 'string',\n              description: 'The contact email address of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The enrolled device user\\'s name.'\n            }\n          },\n          required: []\n        },\n        mac_address: {\n          type: 'string',\n          description: 'The device MAC address.'\n        },\n        manufacturer: {\n          type: 'string',\n          description: 'The device manufacturer.'\n        },\n        model: {\n          type: 'string',\n          description: 'The model name of the device.'\n        },\n        os_version: {\n          type: 'string',\n          description: 'The device operating system version number.'\n        },\n        os_version_extra: {\n          type: 'string',\n          description: 'Additional operating system version data. For macOS or iOS, the Product Version Extra. For Linux, the kernel release version.'\n        },\n        public_ip: {\n          type: 'string',\n          description: 'The public IP address of the WARP client.'\n        },\n        serial_number: {\n          type: 'string',\n          description: 'The device serial number.'\n        }\n      },\n      required: [        'id',\n        'active_registrations',\n        'created_at',\n        'last_seen_at',\n        'name',\n        'updated_at'\n      ]\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      device_id: {
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
  const { device_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.devices.devices.get(device_id, body)),
  );
};

export default { metadata, tool, handler };
