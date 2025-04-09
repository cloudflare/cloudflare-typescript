// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'spectrum.apps',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_spectrum_apps',
  description: "Updates a previously existing application's configuration that uses a name for the origin.",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Zone identifier.',
          },
          app_id: {
            type: 'string',
            description: 'App identifier.',
          },
          dns: {
            type: 'object',
            description: 'The name and type of DNS record for the Spectrum application.',
            properties: {
              name: {
                type: 'string',
                description: 'The name of the DNS record associated with the application.',
              },
              type: {
                type: 'string',
                description: 'The type of DNS record associated with the application.',
                enum: ['CNAME', 'ADDRESS'],
              },
            },
            required: [],
          },
          ip_firewall: {
            type: 'boolean',
            description:
              'Enables IP Access Rules for this application.\nNotes: Only available for TCP applications.',
          },
          protocol: {
            type: 'string',
            description:
              'The port configuration at Cloudflare\'s edge. May specify a single port, for example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.',
          },
          proxy_protocol: {
            type: 'string',
            description:
              'Enables Proxy Protocol to the origin. Refer to [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/) for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple Proxy Protocol.',
            enum: ['off', 'v1', 'v2', 'simple'],
          },
          tls: {
            type: 'string',
            description: 'The type of TLS termination associated with the application.',
            enum: ['off', 'flexible', 'full', 'strict'],
          },
          traffic_type: {
            type: 'string',
            description:
              'Determines how data travels from the edge to your origin. When set to "direct", Spectrum will send traffic directly to your origin, and the application\'s type is derived from the `protocol`. When set to "http" or "https", Spectrum will apply Cloudflare\'s HTTP/HTTPS features as it sends traffic to your origin, and the application type matches this property exactly.',
            enum: ['direct', 'http', 'https'],
          },
          argo_smart_routing: {
            type: 'boolean',
            description:
              'Enables Argo Smart Routing for this application.\nNotes: Only available for TCP applications with traffic_type set to "direct".',
          },
          edge_ips: {
            anyOf: [
              {
                type: 'object',
                properties: {
                  connectivity: {
                    type: 'string',
                    description: 'The IP versions supported for inbound connections on Spectrum anycast IPs.',
                    enum: ['all', 'ipv4', 'ipv6'],
                  },
                  type: {
                    type: 'string',
                    description:
                      'The type of edge IP configuration specified. Dynamically allocated edge IPs use Spectrum anycast IPs in accordance with the connectivity you specify. Only valid with CNAME DNS names.',
                    enum: ['dynamic'],
                  },
                },
                required: [],
              },
              {
                type: 'object',
                properties: {
                  ips: {
                    type: 'array',
                    description:
                      'The array of customer owned IPs we broadcast via anycast for this hostname and application.',
                    items: {
                      type: 'string',
                      description: 'Edge anycast IPs.',
                    },
                  },
                  type: {
                    type: 'string',
                    description:
                      'The type of edge IP configuration specified. Statically allocated edge IPs use customer IPs in accordance with the ips array you specify. Only valid with ADDRESS DNS names.',
                    enum: ['static'],
                  },
                },
                required: [],
              },
            ],
            description: 'The anycast edge IP configuration for the hostname of this application.',
          },
          origin_direct: {
            type: 'array',
            description:
              'List of origin IP addresses. Array may contain multiple IP addresses for load balancing.',
            items: {
              type: 'string',
            },
          },
          origin_dns: {
            type: 'object',
            description: 'The name and type of DNS record for the Spectrum application.',
            properties: {
              name: {
                type: 'string',
                description: 'The name of the DNS record associated with the origin.',
              },
              ttl: {
                type: 'integer',
                description: 'The TTL of our resolution of your DNS record in seconds.',
              },
              type: {
                type: 'string',
                description:
                  'The type of DNS record associated with the origin. "" is used to specify a combination of A/AAAA records.',
                enum: ['', 'A', 'AAAA', 'SRV'],
              },
            },
            required: [],
          },
          origin_port: {
            anyOf: [
              {
                type: 'integer',
              },
              {
                type: 'string',
              },
            ],
            description:
              'The destination port at the origin. Only specified in conjunction with origin_dns. May use an integer to specify a single origin port, for example `1000`, or a string to specify a range of origin ports, for example `"1000-2000"`.\nNotes: If specifying a port range, the number of ports in the range must match the number of ports specified in the "protocol" field.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Zone identifier.',
          },
          app_id: {
            type: 'string',
            description: 'App identifier.',
          },
          dns: {
            $ref: '#/anyOf/0/properties/dns',
          },
          protocol: {
            type: 'string',
            description:
              'The port configuration at Cloudflare\'s edge. May specify a single port, for example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.',
          },
          origin_direct: {
            type: 'array',
            description:
              'List of origin IP addresses. Array may contain multiple IP addresses for load balancing.',
            items: {
              type: 'string',
            },
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { app_id, ...body } = args;
  return client.spectrum.apps.update(app_id, body);
};

export default { metadata, tool, handler };
