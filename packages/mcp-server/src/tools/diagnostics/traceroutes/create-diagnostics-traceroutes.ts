// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'diagnostics.traceroutes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_diagnostics_traceroutes',
  description: 'Run traceroutes from Cloudflare colos.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      targets: {
        type: 'array',
        items: {
          type: 'string',
          description: 'Hosts as a hostname or IPv4/IPv6 address represented by strings.',
        },
      },
      colos: {
        type: 'array',
        description:
          'If no source colo names specified, all colos will be used. China colos are unavailable for traceroutes.',
        items: {
          type: 'string',
          description: 'Source colo name.',
        },
      },
      options: {
        type: 'object',
        properties: {
          max_ttl: {
            type: 'integer',
            description: 'Max TTL.',
          },
          packet_type: {
            type: 'string',
            description: 'Type of packet sent.',
            enum: ['icmp', 'tcp', 'udp', 'gre', 'gre+icmp'],
          },
          packets_per_ttl: {
            type: 'integer',
            description: 'Number of packets sent at each TTL.',
          },
          port: {
            type: 'integer',
            description:
              'For UDP and TCP, specifies the destination port. For ICMP, specifies the initial ICMP sequence value. Default value 0 will choose the best value to use for each protocol.',
          },
          wait_time: {
            type: 'integer',
            description: 'Set the time (in seconds) to wait for a response to a probe.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.diagnostics.traceroutes.create(body);
};

export default { metadata, tool, handler };
