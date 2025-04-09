// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_magic_transit_pcaps',
  description: 'Create new PCAP request for account.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Identifier',
          },
          packet_limit: {
            type: 'number',
            description: 'The limit of packets contained in a packet capture.',
          },
          system: {
            type: 'string',
            description: 'The system used to collect packet captures.',
            enum: ['magic-transit'],
          },
          time_limit: {
            type: 'number',
            description: 'The packet capture duration in seconds.',
          },
          type: {
            type: 'string',
            description:
              'The type of packet capture. `Simple` captures sampled packets, and `full` captures entire payloads and non-sampled packets.',
            enum: ['simple', 'full'],
          },
          filter_v1: {
            type: 'object',
            description: 'The packet capture filter. When this field is empty, all packets are captured.',
            properties: {
              destination_address: {
                type: 'string',
                description: 'The destination IP address of the packet.',
              },
              destination_port: {
                type: 'number',
                description: 'The destination port of the packet.',
              },
              protocol: {
                type: 'number',
                description: 'The protocol number of the packet.',
              },
              source_address: {
                type: 'string',
                description: 'The source IP address of the packet.',
              },
              source_port: {
                type: 'number',
                description: 'The source port of the packet.',
              },
            },
            required: [],
          },
          offset_time: {
            type: 'string',
            description:
              'The RFC 3339 offset timestamp from which to query backwards for packets. Must be within the last 24h. When this field is empty, defaults to time of request.',
            format: 'date-time',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Identifier',
          },
          colo_name: {
            type: 'string',
            description:
              'The name of the data center used for the packet capture. This can be a specific colo (ord02) or a multi-colo name (ORD). This field only applies to `full` packet captures.',
          },
          destination_conf: {
            type: 'string',
            description: 'The full URI for the bucket. This field only applies to `full` packet captures.',
          },
          system: {
            type: 'string',
            description: 'The system used to collect packet captures.',
            enum: ['magic-transit'],
          },
          time_limit: {
            type: 'number',
            description: 'The packet capture duration in seconds.',
          },
          type: {
            type: 'string',
            description:
              'The type of packet capture. `Simple` captures sampled packets, and `full` captures entire payloads and non-sampled packets.',
            enum: ['simple', 'full'],
          },
          byte_limit: {
            type: 'number',
            description:
              'The maximum number of bytes to capture. This field only applies to `full` packet captures.',
          },
          filter_v1: {
            $ref: '#/anyOf/0/properties/filter_v1',
          },
          packet_limit: {
            type: 'number',
            description: 'The limit of packets contained in a packet capture.',
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicTransit.pcaps.create(body);
};

export default { metadata, tool, handler };
