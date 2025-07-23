// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.gre_tunnels',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/gre_tunnels',
  operationId: 'magic-gre-tunnels-create-gre-tunnels',
};

export const tool: Tool = {
  name: 'create_magic_transit_gre_tunnels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new GRE tunnel. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      cloudflare_gre_endpoint: {
        type: 'string',
        description: 'The IP address assigned to the Cloudflare side of the GRE tunnel.',
      },
      customer_gre_endpoint: {
        type: 'string',
        description: 'The IP address assigned to the customer side of the GRE tunnel.',
      },
      interface_address: {
        type: 'string',
        description:
          'A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.',
      },
      name: {
        type: 'string',
        description:
          'The name of the tunnel. The name cannot contain spaces or special characters, must be 15 characters or less, and cannot share a name with another GRE tunnel.',
      },
      description: {
        type: 'string',
        description: 'An optional description of the GRE tunnel.',
      },
      health_check: {
        type: 'object',
        properties: {
          direction: {
            type: 'string',
            description:
              'The direction of the flow of the healthcheck. Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.',
            enum: ['unidirectional', 'bidirectional'],
          },
          enabled: {
            type: 'boolean',
            description: 'Determines whether to run healthchecks for a tunnel.',
          },
          rate: {
            $ref: '#/$defs/health_check_rate',
          },
          target: {
            anyOf: [
              {
                type: 'object',
                description:
                  'The destination address in a request type health check. After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target.',
                properties: {
                  effective: {
                    type: 'string',
                    description:
                      "The effective health check target. If 'saved' is empty, then this field will be populated with the calculated default value on GET requests. Ignored in POST, PUT, and PATCH requests.",
                  },
                  saved: {
                    type: 'string',
                    description:
                      'The saved health check target. Setting the value to the empty string indicates that the calculated default value will be used.',
                  },
                },
              },
              {
                type: 'string',
              },
            ],
            description:
              'The destination address in a request type health check. After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.',
          },
          type: {
            $ref: '#/$defs/health_check_type',
          },
        },
      },
      mtu: {
        type: 'integer',
        description: 'Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576.',
      },
      ttl: {
        type: 'integer',
        description: 'Time To Live (TTL) in number of hops of the GRE tunnel.',
      },
      'x-magic-new-hc-target': {
        type: 'boolean',
      },
    },
    required: ['account_id', 'cloudflare_gre_endpoint', 'customer_gre_endpoint', 'interface_address', 'name'],
    $defs: {
      health_check_rate: {
        type: 'string',
        description: 'How frequent the health check is run. The default value is `mid`.',
        enum: ['low', 'mid', 'high'],
      },
      health_check_type: {
        type: 'string',
        description: 'The type of healthcheck to run, reply or request. The default value is `reply`.',
        enum: ['reply', 'request'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.magicTransit.greTunnels.create(body));
};

export default { metadata, tool, handler };
