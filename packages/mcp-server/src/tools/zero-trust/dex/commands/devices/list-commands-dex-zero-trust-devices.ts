// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.commands.devices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/commands/devices',
  operationId: 'get-commands-eligible-devices',
};

export const tool: Tool = {
  name: 'list_commands_dex_zero_trust_devices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList devices with WARP client support for remote captures which have been connected in the last 1 hour.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        devices: {\n          type: 'array',\n          description: 'List of eligible devices',\n          items: {\n            type: 'object',\n            properties: {\n              deviceId: {\n                type: 'string',\n                description: 'Device identifier (UUID v4)'\n              },\n              deviceName: {\n                type: 'string',\n                description: 'Device identifier (human readable)'\n              },\n              eligible: {\n                type: 'boolean',\n                description: 'Whether the device is eligible for remote captures'\n              },\n              ineligibleReason: {\n                type: 'string',\n                description: 'If the device is not eligible, the reason why.'\n              },\n              personEmail: {\n                type: 'string',\n                description: 'User contact email address'\n              },\n              platform: {\n                type: 'string',\n                description: 'Operating system'\n              },\n              status: {\n                type: 'string',\n                description: 'Network status'\n              },\n              timestamp: {\n                type: 'string',\n                description: 'Timestamp in ISO format'\n              },\n              version: {\n                type: 'string',\n                description: 'WARP client version'\n              }\n            }\n          }\n        }\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page',
      },
      search: {
        type: 'string',
        description: 'Filter devices by name or email',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'page', 'per_page'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zeroTrust.dex.commands.devices.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
