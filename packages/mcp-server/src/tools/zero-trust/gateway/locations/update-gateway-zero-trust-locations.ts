// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.locations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_gateway_zero_trust_locations',
  description: 'Updates a configured Zero Trust Gateway location.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      location_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'The name of the location.',
      },
      client_default: {
        type: 'boolean',
        description: 'True if the location is the default location.',
      },
      dns_destination_ips_id: {
        type: 'string',
        description:
          'The identifier of the pair of IPv4 addresses assigned to this location. When creating a location, if this field is absent or set with null, the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is auto-assigned. When updating a location, if the field is absent or set with null, the pre-assigned pair remains unchanged.',
      },
      ecs_support: {
        type: 'boolean',
        description: 'True if the location needs to resolve EDNS queries.',
      },
      endpoints: {
        type: 'object',
        description:
          'The destination endpoints configured for this location. When updating a location, if this field is absent or set with null, the endpoints configuration remains unchanged.',
        properties: {
          doh: {
            type: 'object',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'True if the endpoint is enabled for this location.',
              },
              networks: {
                type: 'array',
                description:
                  'A list of allowed source IP network ranges for this endpoint. When empty, all source IPs are allowed. A non-empty list is only effective if the endpoint is enabled for this location.',
                items: {
                  type: 'object',
                  properties: {
                    network: {
                      type: 'string',
                      description: 'The IP address or IP CIDR.',
                    },
                  },
                  required: ['network'],
                },
              },
              require_token: {
                type: 'boolean',
                description:
                  'True if the endpoint requires [user identity](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/agentless/dns/dns-over-https/#filter-doh-requests-by-user) authentication.',
              },
            },
            required: [],
          },
          dot: {
            type: 'object',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'True if the endpoint is enabled for this location.',
              },
              networks: {
                type: 'array',
                description:
                  'A list of allowed source IP network ranges for this endpoint. When empty, all source IPs are allowed. A non-empty list is only effective if the endpoint is enabled for this location.',
                items: {
                  $ref: '#/properties/endpoints/doh/networks/items',
                },
              },
            },
            required: [],
          },
          ipv4: {
            type: 'object',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'True if the endpoint is enabled for this location.',
              },
            },
            required: [],
          },
          ipv6: {
            type: 'object',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'True if the endpoint is enabled for this location.',
              },
              networks: {
                type: 'array',
                description:
                  'A list of allowed source IPv6 network ranges for this endpoint. When empty, all source IPs are allowed. A non-empty list is only effective if the endpoint is enabled for this location.',
                items: {
                  type: 'object',
                  properties: {
                    network: {
                      type: 'string',
                      description: 'The IPv6 address or IPv6 CIDR.',
                    },
                  },
                  required: ['network'],
                },
              },
            },
            required: [],
          },
        },
        required: [],
      },
      networks: {
        type: 'array',
        description:
          'A list of network ranges that requests from this location would originate from. A non-empty list is only effective if the ipv4 endpoint is enabled for this location.',
        items: {
          type: 'object',
          properties: {
            network: {
              type: 'string',
              description: 'The IPv4 address or IPv4 CIDR. IPv4 CIDRs are limited to a maximum of /24.',
            },
          },
          required: ['network'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { location_id, ...body } = args;
  return client.zeroTrust.gateway.locations.update(location_id, body);
};

export default { metadata, tool, handler };
