// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/addressing/address_maps/{address_map_id}',
  operationId: 'ip-address-management-address-maps-address-map-details',
};

export const tool: Tool = {
  name: 'get_addressing_address_maps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nShow a particular address map owned by the account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier of an Address Map.'\n        },\n        can_delete: {\n          type: 'boolean',\n          description: 'If set to false, then the Address Map cannot be deleted via API. This is true for Cloudflare-managed maps.'\n        },\n        can_modify_ips: {\n          type: 'boolean',\n          description: 'If set to false, then the IPs on the Address Map cannot be modified via the API. This is true for Cloudflare-managed maps.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        default_sni: {\n          type: 'string',\n          description: 'If you have legacy TLS clients which do not send the TLS server name indicator, then you can specify one default SNI on the map. If Cloudflare receives a TLS handshake from a client without an SNI, it will respond with the default SNI on those IPs. The default SNI can be any valid zone or subdomain owned by the account.'\n        },\n        description: {\n          type: 'string',\n          description: 'An optional description field which may be used to describe the types of IPs or zones on the map.'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Whether the Address Map is enabled or not. Cloudflare\\'s DNS will not respond with IP addresses on an Address Map until the map is enabled.'\n        },\n        ips: {\n          $ref: '#/$defs/ips'\n        },\n        memberships: {\n          type: 'array',\n          description: 'Zones and Accounts which will be assigned IPs on this Address Map. A zone membership will take priority over an account membership.',\n          items: {\n            type: 'object',\n            properties: {\n              can_delete: {\n                type: 'boolean',\n                description: 'Controls whether the membership can be deleted via the API or not.'\n              },\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              identifier: {\n                type: 'string',\n                description: 'The identifier for the membership (eg. a zone or account tag).'\n              },\n              kind: {\n                $ref: '#/$defs/kind'\n              }\n            },\n            required: []\n          }\n        },\n        modified_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    ips: {\n      type: 'array',\n      description: 'The set of IPs on the Address Map.',\n      items: {\n        type: 'object',\n        properties: {\n          created_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          ip: {\n            type: 'string',\n            description: 'An IPv4 or IPv6 address.'\n          }\n        },\n        required: []\n      }\n    },\n    kind: {\n      type: 'string',\n      description: 'The type of the membership.',\n      enum: [        'zone',\n        'account'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      address_map_id: {
        type: 'string',
        description: 'Identifier of an Address Map.',
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
  const { address_map_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.addressing.addressMaps.get(address_map_id, body)),
  );
};

export default { metadata, tool, handler };
