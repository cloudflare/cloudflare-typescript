// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites.lans',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}',
  operationId: 'magic-site-lans-delete-lan',
};

export const tool: Tool = {
  name: 'delete_sites_magic_transit_lans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRemove a specific Site LAN.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/lan'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    lan: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        ha_link: {\n          type: 'boolean',\n          description: 'mark true to use this LAN for HA probing. only works for site with HA turned on. only one LAN can be set as the ha_link.'\n        },\n        name: {\n          type: 'string'\n        },\n        nat: {\n          $ref: '#/$defs/nat'\n        },\n        physport: {\n          type: 'integer'\n        },\n        routed_subnets: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/routed_subnet'\n          }\n        },\n        site_id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        static_addressing: {\n          $ref: '#/$defs/lan_static_addressing'\n        },\n        vlan_tag: {\n          type: 'integer',\n          description: 'VLAN ID. Use zero for untagged.'\n        }\n      }\n    },\n    nat: {\n      type: 'object',\n      properties: {\n        static_prefix: {\n          type: 'string',\n          description: 'A valid CIDR notation representing an IP range.'\n        }\n      }\n    },\n    routed_subnet: {\n      type: 'object',\n      properties: {\n        next_hop: {\n          type: 'string',\n          description: 'A valid IPv4 address.'\n        },\n        prefix: {\n          type: 'string',\n          description: 'A valid CIDR notation representing an IP range.'\n        },\n        nat: {\n          $ref: '#/$defs/nat'\n        }\n      },\n      required: [        'next_hop',\n        'prefix'\n      ]\n    },\n    lan_static_addressing: {\n      type: 'object',\n      description: 'If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP). However, if in high availability mode, static_address is required along with secondary and virtual address.',\n      properties: {\n        address: {\n          type: 'string',\n          description: 'A valid CIDR notation representing an IP range.'\n        },\n        dhcp_relay: {\n          $ref: '#/$defs/dhcp_relay'\n        },\n        dhcp_server: {\n          $ref: '#/$defs/dhcp_server'\n        },\n        secondary_address: {\n          type: 'string',\n          description: 'A valid CIDR notation representing an IP range.'\n        },\n        virtual_address: {\n          type: 'string',\n          description: 'A valid CIDR notation representing an IP range.'\n        }\n      },\n      required: [        'address'\n      ]\n    },\n    dhcp_relay: {\n      type: 'object',\n      properties: {\n        server_addresses: {\n          type: 'array',\n          description: 'List of DHCP server IPs.',\n          items: {\n            type: 'string',\n            description: 'A valid IPv4 address.'\n          }\n        }\n      }\n    },\n    dhcp_server: {\n      type: 'object',\n      properties: {\n        dhcp_pool_end: {\n          type: 'string',\n          description: 'A valid IPv4 address.'\n        },\n        dhcp_pool_start: {\n          type: 'string',\n          description: 'A valid IPv4 address.'\n        },\n        dns_server: {\n          type: 'string',\n          description: 'A valid IPv4 address.'\n        },\n        dns_servers: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'A valid IPv4 address.'\n          }\n        },\n        reservations: {\n          type: 'object',\n          description: 'Mapping of MAC addresses to IP addresses'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      site_id: {
        type: 'string',
        description: 'Identifier',
      },
      lan_id: {
        type: 'string',
        description: 'Identifier',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'site_id', 'lan_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { lan_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.magicTransit.sites.lans.delete(lan_id, body)),
  );
};

export default { metadata, tool, handler };
