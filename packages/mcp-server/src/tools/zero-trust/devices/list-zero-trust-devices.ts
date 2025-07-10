// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices',
  operationId: 'devices-list-devices',
};

export const tool: Tool = {
  name: 'list_zero_trust_devices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList WARP devices. Not supported when [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/) is enabled for the account.\n\n**Deprecated**: please use one of the following endpoints instead:\n- GET /accounts/{account_id}/devices/physical-devices\n- GET /accounts/{account_id}/devices/registrations\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/device'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    device: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Registration ID. Equal to Device ID except for accounts which enabled [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/).'\n        },\n        created: {\n          type: 'string',\n          description: 'When the device was created.',\n          format: 'date-time'\n        },\n        deleted: {\n          type: 'boolean',\n          description: 'True if the device was deleted.'\n        },\n        device_type: {\n          type: 'string',\n          enum: [            'windows',\n            'mac',\n            'linux',\n            'android',\n            'ios',\n            'chromeos'\n          ]\n        },\n        ip: {\n          type: 'string',\n          description: 'IPv4 or IPv6 address.'\n        },\n        key: {\n          type: 'string',\n          description: 'The device\\'s public key.'\n        },\n        last_seen: {\n          type: 'string',\n          description: 'When the device last connected to Cloudflare services.',\n          format: 'date-time'\n        },\n        mac_address: {\n          type: 'string',\n          description: 'The device mac address.'\n        },\n        manufacturer: {\n          type: 'string',\n          description: 'The device manufacturer name.'\n        },\n        model: {\n          type: 'string',\n          description: 'The device model name.'\n        },\n        name: {\n          type: 'string',\n          description: 'The device name.'\n        },\n        os_distro_name: {\n          type: 'string',\n          description: 'The Linux distro name.'\n        },\n        os_distro_revision: {\n          type: 'string',\n          description: 'The Linux distro revision.'\n        },\n        os_version: {\n          type: 'string',\n          description: 'The operating system version.'\n        },\n        os_version_extra: {\n          type: 'string',\n          description: 'The operating system version extra parameter.'\n        },\n        revoked_at: {\n          type: 'string',\n          description: 'When the device was revoked.',\n          format: 'date-time'\n        },\n        serial_number: {\n          type: 'string',\n          description: 'The device serial number.'\n        },\n        updated: {\n          type: 'string',\n          description: 'When the device was updated.',\n          format: 'date-time'\n        },\n        user: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'UUID.'\n            },\n            email: {\n              type: 'string',\n              description: 'The contact email address of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The enrolled device user\\'s name.'\n            }\n          },\n          required: []\n        },\n        version: {\n          type: 'string',\n          description: 'The WARP client version.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
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
  const body = args as any;
  const response = await client.zeroTrust.devices.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
