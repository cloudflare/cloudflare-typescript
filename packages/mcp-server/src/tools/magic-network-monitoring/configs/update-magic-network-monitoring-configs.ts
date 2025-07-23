// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_network_monitoring.configs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/mnm/config',
  operationId: 'magic-network-monitoring-configuration-update-an-entire-account-configuration',
};

export const tool: Tool = {
  name: 'update_magic_network_monitoring_configs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing network monitoring configuration, requires the entire configuration to be updated at once.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/configuration'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    configuration: {\n      type: 'object',\n      properties: {\n        default_sampling: {\n          type: 'number',\n          description: 'Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router.'\n        },\n        name: {\n          type: 'string',\n          description: 'The account name.'\n        },\n        router_ips: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'IPv4 CIDR of the router sourcing flow data. Only /32 addresses are currently supported.'\n          }\n        },\n        warp_devices: {\n          type: 'array',\n          items: {\n            type: 'object',\n            description: 'Object representing a warp device with an ID and name.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the warp device.'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the warp device.'\n              },\n              router_ip: {\n                type: 'string',\n                description: 'IPv4 CIDR of the router sourcing flow data associated with this warp device. Only /32 addresses are currently supported.'\n              }\n            },\n            required: [              'id',\n              'name',\n              'router_ip'\n            ]\n          }\n        }\n      },\n      required: [        'default_sampling',\n        'name',\n        'router_ips',\n        'warp_devices'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      default_sampling: {
        type: 'number',
        description:
          'Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router.',
      },
      name: {
        type: 'string',
        description: 'The account name.',
      },
      router_ips: {
        type: 'array',
        items: {
          type: 'string',
          description:
            'IPv4 CIDR of the router sourcing flow data. Only /32 addresses are currently supported.',
        },
      },
      warp_devices: {
        type: 'array',
        items: {
          type: 'object',
          description: 'Object representing a warp device with an ID and name.',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier for the warp device.',
            },
            name: {
              type: 'string',
              description: 'Name of the warp device.',
            },
            router_ip: {
              type: 'string',
              description:
                'IPv4 CIDR of the router sourcing flow data associated with this warp device. Only /32 addresses are currently supported.',
            },
          },
          required: ['id', 'name', 'router_ip'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'default_sampling', 'name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.magicNetworkMonitoring.configs.update(body)),
  );
};

export default { metadata, tool, handler };
