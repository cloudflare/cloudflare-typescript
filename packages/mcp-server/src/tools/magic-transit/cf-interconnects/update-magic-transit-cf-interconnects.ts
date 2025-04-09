// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.cf_interconnects',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_magic_transit_cf_interconnects',
  description:
    'Updates a specific interconnect associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      cf_interconnect_id: {
        type: 'string',
        description: 'Identifier',
      },
      description: {
        type: 'string',
        description: 'An optional description of the interconnect.',
      },
      gre: {
        type: 'object',
        description: 'The configuration specific to GRE interconnects.',
        properties: {
          cloudflare_endpoint: {
            type: 'string',
            description:
              'The IP address assigned to the Cloudflare side of the GRE tunnel created as part of the Interconnect.',
          },
        },
        required: [],
      },
      health_check: {
        type: 'object',
        properties: {
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
      interface_address: {
        type: 'string',
        description:
          'A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.',
      },
      mtu: {
        type: 'integer',
        description:
          'The Maximum Transmission Unit (MTU) in bytes for the interconnect. The minimum value is 576.',
      },
      'x-magic-new-hc-target': {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { cf_interconnect_id, ...body } = args;
  return client.magicTransit.cfInterconnects.update(cf_interconnect_id, body);
};

export default { metadata, tool, handler };
