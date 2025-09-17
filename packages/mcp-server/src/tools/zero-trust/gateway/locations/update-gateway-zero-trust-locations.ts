// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.locations',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/gateway/locations/{location_id}',
  operationId: 'zero-trust-gateway-locations-update-zero-trust-gateway-location',
};

export const tool: Tool = {
  name: 'update_gateway_zero_trust_locations',
  description: 'Update a configured Zero Trust Gateway location.',
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
        description: 'Specify the location name.',
      },
      client_default: {
        type: 'boolean',
        description: 'Indicate whether this location is the default location.',
      },
      dns_destination_ips_id: {
        type: 'string',
        description:
          'Specify the identifier of the pair of IPv4 addresses assigned to this location. When creating a location, if this field is absent or set to null, the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is auto-assigned. When updating a location, if this field is absent or set to null, the pre-assigned pair remains unchanged.',
      },
      ecs_support: {
        type: 'boolean',
        description: 'Indicate whether the location must resolve EDNS queries.',
      },
      endpoints: {
        $ref: '#/$defs/endpoint',
      },
      networks: {
        type: 'array',
        description:
          'Specify the list of network ranges from which requests at this location originate. The list takes effect only if it is non-empty and the IPv4 endpoint is enabled for this location.',
        items: {
          type: 'object',
          properties: {
            network: {
              type: 'string',
              description: 'Specify the IPv4 address or IPv4 CIDR. Limit IPv4 CIDRs to a maximum of /24.',
            },
          },
          required: ['network'],
        },
      },
    },
    required: ['account_id', 'location_id', 'name'],
    $defs: {
      endpoint: {
        type: 'object',
        description: 'Configure the destination endpoints for this location.',
        properties: {
          doh: {
            $ref: '#/$defs/doh_endpoint',
          },
          dot: {
            $ref: '#/$defs/dot_endpoint',
          },
          ipv4: {
            $ref: '#/$defs/ipv4_endpoint',
          },
          ipv6: {
            $ref: '#/$defs/ipv6_endpoint',
          },
        },
        required: ['doh', 'dot', 'ipv4', 'ipv6'],
      },
      doh_endpoint: {
        type: 'object',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Indicate whether the DOH endpoint is enabled for this location.',
          },
          networks: {
            type: 'array',
            description:
              'Specify the list of allowed source IP network ranges for this endpoint. When the list is empty, the endpoint allows all source IPs. The list takes effect only if the endpoint is enabled for this location.',
            items: {
              $ref: '#/$defs/ip_network',
            },
          },
          require_token: {
            type: 'boolean',
            description: 'Specify whether the DOH endpoint requires user identity authentication.',
          },
        },
      },
      ip_network: {
        type: 'object',
        properties: {
          network: {
            type: 'string',
            description: 'Specify the IP address or IP CIDR.',
          },
        },
        required: ['network'],
      },
      dot_endpoint: {
        type: 'object',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Indicate whether the DOT endpoint is enabled for this location.',
          },
          networks: {
            type: 'array',
            description:
              'Specify the list of allowed source IP network ranges for this endpoint. When the list is empty, the endpoint allows all source IPs. The list takes effect only if the endpoint is enabled for this location.',
            items: {
              $ref: '#/$defs/ip_network',
            },
          },
        },
      },
      ipv4_endpoint: {
        type: 'object',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Indicate whether the IPv4 endpoint is enabled for this location.',
          },
        },
      },
      ipv6_endpoint: {
        type: 'object',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Indicate whether the IPV6 endpoint is enabled for this location.',
          },
          networks: {
            type: 'array',
            description:
              'Specify the list of allowed source IPv6 network ranges for this endpoint. When the list is empty, the endpoint allows all source IPs. The list takes effect only if the endpoint is enabled for this location.',
            items: {
              $ref: '#/$defs/ipv6_network',
            },
          },
        },
      },
      ipv6_network: {
        type: 'object',
        properties: {
          network: {
            type: 'string',
            description: 'Specify the IPv6 address or IPv6 CIDR.',
          },
        },
        required: ['network'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { location_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.gateway.locations.update(location_id, body));
};

export default { metadata, tool, handler };
