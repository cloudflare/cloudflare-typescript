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
  httpPath: '/accounts/{account_id}/devices/physical-devices',
  operationId: 'list-devices',
};

export const tool: Tool = {
  name: 'list_devices_zero_trust_devices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists WARP devices.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A message which can be returned in either the \\'errors\\' or \\'messages\\' fields in a v4 API response.',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A message which can be returned in either the \\'errors\\' or \\'messages\\' fields in a v4 API response.',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A WARP Device.',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'The unique ID of the device.'\n          },\n          active_registrations: {\n            type: 'integer',\n            description: 'The number of active registrations for the device. Active registrations are those which haven\\'t been revoked or deleted.'\n          },\n          created_at: {\n            type: 'string',\n            description: 'The RFC3339 timestamp when the device was created.'\n          },\n          last_seen_at: {\n            type: 'string',\n            description: 'The RFC3339 timestamp when the device was last seen.'\n          },\n          name: {\n            type: 'string',\n            description: 'The name of the device.'\n          },\n          updated_at: {\n            type: 'string',\n            description: 'The RFC3339 timestamp when the device was last updated.'\n          },\n          client_version: {\n            type: 'string',\n            description: 'Version of the WARP client.'\n          },\n          deleted_at: {\n            type: 'string',\n            description: 'The RFC3339 timestamp when the device was deleted.'\n          },\n          device_type: {\n            type: 'string',\n            description: 'The device operating system.'\n          },\n          hardware_id: {\n            type: 'string',\n            description: 'A string that uniquely identifies the hardware or virtual machine (VM).'\n          },\n          last_seen_registration: {\n            type: 'object',\n            description: 'The last seen registration for the device.',\n            properties: {\n              policy: {\n                type: 'object',\n                description: 'A summary of the device profile evaluated for the registration.',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'The ID of the device settings profile.'\n                  },\n                  default: {\n                    type: 'boolean',\n                    description: 'Whether the device settings profile is the default profile for the account.'\n                  },\n                  deleted: {\n                    type: 'boolean',\n                    description: 'Whether the device settings profile was deleted.'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'The name of the device settings profile.'\n                  },\n                  updated_at: {\n                    type: 'string',\n                    description: 'The RFC3339 timestamp of when the device settings profile last changed for the registration.'\n                  }\n                },\n                required: [                  'id',\n                  'default',\n                  'deleted',\n                  'name',\n                  'updated_at'\n                ]\n              }\n            }\n          },\n          last_seen_user: {\n            type: 'object',\n            description: 'The last user to use the WARP device.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'UUID.'\n              },\n              email: {\n                type: 'string',\n                description: 'The contact email address of the user.'\n              },\n              name: {\n                type: 'string',\n                description: 'The enrolled device user\\'s name.'\n              }\n            }\n          },\n          mac_address: {\n            type: 'string',\n            description: 'The device MAC address.'\n          },\n          manufacturer: {\n            type: 'string',\n            description: 'The device manufacturer.'\n          },\n          model: {\n            type: 'string',\n            description: 'The model name of the device.'\n          },\n          os_version: {\n            type: 'string',\n            description: 'The device operating system version number.'\n          },\n          os_version_extra: {\n            type: 'string',\n            description: 'Additional operating system version data. For macOS or iOS, the Product Version Extra. For Linux, the kernel release version.'\n          },\n          public_ip: {\n            type: 'string',\n            description: '**Deprecated**: IP information is provided by DEX - see https://developers.cloudflare.com/api/resources/zero_trust/subresources/dex/subresources/fleet_status/subresources/devices/methods/list/\\n'\n          },\n          serial_number: {\n            type: 'string',\n            description: 'The device serial number.'\n          }\n        },\n        required: [          'id',\n          'active_registrations',\n          'created_at',\n          'last_seen_at',\n          'name',\n          'updated_at'\n        ]\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result_info: {\n      type: 'object',\n      description: 'V4 public API Pagination/Cursor info.',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Number of records in the response.'\n        },\n        cursor: {\n          type: 'string',\n          description: 'Opaque token to request the next set of records.'\n        },\n        per_page: {\n          type: 'integer',\n          description: 'The limit for the number of records in the response.'\n        },\n        total_count: {\n          type: 'integer',\n          description: 'Total number of records available.'\n        }\n      },\n      required: [        'count',\n        'cursor',\n        'per_page'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'array',
        description: 'Filter by a one or more device IDs.',
        items: {
          type: 'string',
        },
      },
      active_registrations: {
        type: 'string',
        description:
          'Include or exclude devices with active registrations. The default is "only" - return only devices with active registrations.',
        enum: ['include', 'only', 'exclude'],
      },
      cursor: {
        type: 'string',
        description:
          'Opaque token indicating the starting position when requesting the next set of records. A cursor value can be obtained from the result_info.cursor field in the response.',
      },
      include: {
        type: 'string',
        description:
          'Comma-separated list of additional information that should be included in the device response. Supported values are: "last_seen_registration.policy".\n',
      },
      last_seen_user: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: "Filter by the last seen user's email.",
          },
        },
      },
      per_page: {
        type: 'integer',
        description: 'The maximum number of devices to return in a single response.',
      },
      search: {
        type: 'string',
        description: 'Search by device details.',
      },
      seen_after: {
        type: 'string',
        description:
          'Filter by the last_seen timestamp - returns only devices last seen after this timestamp.',
      },
      seen_before: {
        type: 'string',
        description:
          'Filter by the last_seen timestamp - returns only devices last seen before this timestamp.',
      },
      sort_by: {
        type: 'string',
        description: 'The device field to order results by.',
        enum: [
          'name',
          'id',
          'client_version',
          'last_seen_user.email',
          'last_seen_at',
          'active_registrations',
          'created_at',
        ],
      },
      sort_order: {
        type: 'string',
        description: 'Sort direction.',
        enum: ['asc', 'desc'],
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
  const { jq_filter, ...body } = args as any;
  const response = await client.zeroTrust.devices.devices.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
