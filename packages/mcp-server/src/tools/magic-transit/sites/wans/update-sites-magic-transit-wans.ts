// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites.wans',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}',
  operationId: 'magic-site-wans-update-wan',
};

export const tool: Tool = {
  name: 'update_sites_magic_transit_wans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a specific Site WAN.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/wan'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    wan: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        health_check_rate: {\n          type: 'string',\n          description: 'Magic WAN health check rate for tunnels created on this link. The default value is `mid`.',\n          enum: [            'low',\n            'mid',\n            'high'\n          ]\n        },\n        name: {\n          type: 'string'\n        },\n        physport: {\n          type: 'integer'\n        },\n        priority: {\n          type: 'integer',\n          description: 'Priority of WAN for traffic loadbalancing.'\n        },\n        site_id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        static_addressing: {\n          $ref: '#/$defs/wan_static_addressing'\n        },\n        vlan_tag: {\n          type: 'integer',\n          description: 'VLAN ID. Use zero for untagged.'\n        }\n      }\n    },\n    wan_static_addressing: {\n      type: 'object',\n      description: '(optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.',\n      properties: {\n        address: {\n          type: 'string',\n          description: 'A valid CIDR notation representing an IP range.'\n        },\n        gateway_address: {\n          type: 'string',\n          description: 'A valid IPv4 address.'\n        },\n        secondary_address: {\n          type: 'string',\n          description: 'A valid CIDR notation representing an IP range.'\n        }\n      },\n      required: [        'address',\n        'gateway_address'\n      ]\n    }\n  }\n}\n```",
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
      wan_id: {
        type: 'string',
        description: 'Identifier',
      },
      name: {
        type: 'string',
      },
      physport: {
        type: 'integer',
      },
      priority: {
        type: 'integer',
      },
      static_addressing: {
        $ref: '#/$defs/wan_static_addressing',
      },
      vlan_tag: {
        type: 'integer',
        description: 'VLAN ID. Use zero for untagged.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'site_id', 'wan_id'],
    $defs: {
      wan_static_addressing: {
        type: 'object',
        description:
          '(optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.',
        properties: {
          address: {
            type: 'string',
            description: 'A valid CIDR notation representing an IP range.',
          },
          gateway_address: {
            type: 'string',
            description: 'A valid IPv4 address.',
          },
          secondary_address: {
            type: 'string',
            description: 'A valid CIDR notation representing an IP range.',
          },
        },
        required: ['address', 'gateway_address'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { wan_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.magicTransit.sites.wans.update(wan_id, body)),
  );
};

export default { metadata, tool, handler };
