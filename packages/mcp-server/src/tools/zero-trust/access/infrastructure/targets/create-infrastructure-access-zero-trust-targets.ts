// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.infrastructure.targets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/infrastructure/targets',
  operationId: 'infra-targets-post',
};

export const tool: Tool = {
  name: 'create_infrastructure_access_zero_trust_targets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate new target\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'target_id',\n          description: 'Target identifier'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Date and time at which the target was created',\n          format: 'date-time'\n        },\n        hostname: {\n          type: 'string',\n          description: 'A non-unique field that refers to a target'\n        },\n        ip: {\n          type: 'object',\n          description: 'The IPv4/IPv6 address that identifies where to reach a target',\n          properties: {\n            ipv4: {\n              type: 'object',\n              description: 'The target\\'s IPv4 address',\n              properties: {\n                ip_addr: {\n                  type: 'string',\n                  description: 'IP address of the target'\n                },\n                virtual_network_id: {\n                  type: 'string',\n                  description: '(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.'\n                }\n              },\n              required: []\n            },\n            ipv6: {\n              type: 'object',\n              description: 'The target\\'s IPv6 address',\n              properties: {\n                ip_addr: {\n                  type: 'string',\n                  description: 'IP address of the target'\n                },\n                virtual_network_id: {\n                  type: 'string',\n                  description: '(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.'\n                }\n              },\n              required: []\n            }\n          },\n          required: []\n        },\n        modified_at: {\n          type: 'string',\n          description: 'Date and time at which the target was modified',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'hostname',\n        'ip',\n        'modified_at'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account identifier',
      },
      hostname: {
        type: 'string',
        description:
          'A non-unique field that refers to a target. Case insensitive, maximum\nlength of 255 characters, supports the use of special characters dash\nand period, does not support spaces, and must start and end with an\nalphanumeric character.',
      },
      ip: {
        type: 'object',
        description: 'The IPv4/IPv6 address that identifies where to reach a target',
        properties: {
          ipv4: {
            type: 'object',
            description: "The target's IPv4 address",
            properties: {
              ip_addr: {
                type: 'string',
                description: 'IP address of the target',
              },
              virtual_network_id: {
                type: 'string',
                description:
                  '(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.',
              },
            },
            required: [],
          },
          ipv6: {
            type: 'object',
            description: "The target's IPv6 address",
            properties: {
              ip_addr: {
                type: 'string',
                description: 'IP address of the target',
              },
              virtual_network_id: {
                type: 'string',
                description:
                  '(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.',
              },
            },
            required: [],
          },
        },
        required: [],
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
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.access.infrastructure.targets.create(body)),
  );
};

export default { metadata, tool, handler };
