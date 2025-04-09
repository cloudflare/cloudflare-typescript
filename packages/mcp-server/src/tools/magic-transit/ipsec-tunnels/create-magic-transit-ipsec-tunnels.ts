// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.ipsec_tunnels',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_magic_transit_ipsec_tunnels',
  description:
    'Creates new IPsec tunnels associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      cloudflare_endpoint: {
        type: 'string',
        description: 'The IP address assigned to the Cloudflare side of the IPsec tunnel.',
      },
      interface_address: {
        type: 'string',
        description:
          'A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.',
      },
      name: {
        type: 'string',
        description: 'The name of the IPsec tunnel. The name cannot share a name with other tunnels.',
      },
      customer_endpoint: {
        type: 'string',
        description:
          'The IP address assigned to the customer side of the IPsec tunnel. Not required, but must be set for proactive traceroutes to work.',
      },
      description: {
        type: 'string',
        description: 'An optional description forthe IPsec tunnel.',
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
            type: 'string',
            description: 'How frequent the health check is run. The default value is `mid`.',
            enum: ['low', 'mid', 'high'],
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
                required: [],
              },
              {
                type: 'string',
              },
            ],
            description:
              'The destination address in a request type health check. After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.',
          },
          type: {
            type: 'string',
            description: 'The type of healthcheck to run, reply or request. The default value is `reply`.',
            enum: ['reply', 'request'],
          },
        },
        required: [],
      },
      psk: {
        type: 'string',
        description: 'A randomly generated or provided string for use in the IPsec tunnel.',
      },
      replay_protection: {
        type: 'boolean',
        description:
          'If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction.',
      },
      'x-magic-new-hc-target': {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicTransit.ipsecTunnels.create(body);
};

export default { metadata, tool, handler };
