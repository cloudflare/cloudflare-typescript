// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.gre_tunnels',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}',
  operationId: 'magic-gre-tunnels-delete-gre-tunnel',
};

export const tool: Tool = {
  name: 'delete_magic_transit_gre_tunnels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDisables and removes a specific static GRE tunnel. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        deleted: {\n          type: 'boolean'\n        },\n        deleted_gre_tunnel: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifier'\n            },\n            cloudflare_gre_endpoint: {\n              type: 'string',\n              description: 'The IP address assigned to the Cloudflare side of the GRE tunnel.'\n            },\n            customer_gre_endpoint: {\n              type: 'string',\n              description: 'The IP address assigned to the customer side of the GRE tunnel.'\n            },\n            interface_address: {\n              type: 'string',\n              description: 'A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the tunnel. The name cannot contain spaces or special characters, must be 15 characters or less, and cannot share a name with another GRE tunnel.'\n            },\n            created_on: {\n              type: 'string',\n              description: 'The date and time the tunnel was created.',\n              format: 'date-time'\n            },\n            description: {\n              type: 'string',\n              description: 'An optional description of the GRE tunnel.'\n            },\n            health_check: {\n              type: 'object',\n              properties: {\n                direction: {\n                  type: 'string',\n                  description: 'The direction of the flow of the healthcheck. Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.',\n                  enum: [                    'unidirectional',\n                    'bidirectional'\n                  ]\n                },\n                enabled: {\n                  type: 'boolean',\n                  description: 'Determines whether to run healthchecks for a tunnel.'\n                },\n                rate: {\n                  $ref: '#/$defs/health_check_rate'\n                },\n                target: {\n                  anyOf: [                    {\n                      type: 'object',\n                      description: 'The destination address in a request type health check. After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target.',\n                      properties: {\n                        effective: {\n                          type: 'string',\n                          description: 'The effective health check target. If \\'saved\\' is empty, then this field will be populated with the calculated default value on GET requests. Ignored in POST, PUT, and PATCH requests.'\n                        },\n                        saved: {\n                          type: 'string',\n                          description: 'The saved health check target. Setting the value to the empty string indicates that the calculated default value will be used.'\n                        }\n                      }\n                    },\n                    {\n                      type: 'string'\n                    }\n                  ],\n                  description: 'The destination address in a request type health check. After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.'\n                },\n                type: {\n                  $ref: '#/$defs/health_check_type'\n                }\n              }\n            },\n            interface_address6: {\n              type: 'string',\n              description: 'A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6. Eg if virtual_subnet6 is 2606:54c1:7:0:a9fe:12d2::/127 , interface_address6 could be 2606:54c1:7:0:a9fe:12d2:1:200/127'\n            },\n            modified_on: {\n              type: 'string',\n              description: 'The date and time the tunnel was last modified.',\n              format: 'date-time'\n            },\n            mtu: {\n              type: 'integer',\n              description: 'Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576.'\n            },\n            ttl: {\n              type: 'integer',\n              description: 'Time To Live (TTL) in number of hops of the GRE tunnel.'\n            }\n          },\n          required: [            'id',\n            'cloudflare_gre_endpoint',\n            'customer_gre_endpoint',\n            'interface_address',\n            'name'\n          ]\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    health_check_rate: {\n      type: 'string',\n      description: 'How frequent the health check is run. The default value is `mid`.',\n      enum: [        'low',\n        'mid',\n        'high'\n      ]\n    },\n    health_check_type: {\n      type: 'string',\n      description: 'The type of healthcheck to run, reply or request. The default value is `reply`.',\n      enum: [        'reply',\n        'request'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      gre_tunnel_id: {
        type: 'string',
        description: 'Identifier',
      },
      'x-magic-new-hc-target': {
        type: 'boolean',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'gre_tunnel_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { gre_tunnel_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.magicTransit.greTunnels.delete(gre_tunnel_id, body)),
  );
};

export default { metadata, tool, handler };
