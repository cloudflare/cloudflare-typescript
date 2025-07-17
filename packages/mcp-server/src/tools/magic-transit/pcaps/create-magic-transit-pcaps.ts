// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/pcaps',
  operationId: 'magic-pcap-collection-create-pcap-request',
};

export const tool: Tool = {
  name: 'create_magic_transit_pcaps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate new PCAP request for account.",
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
            $ref: '#/$defs/pcap_filter',
          },
          offset_time: {
            type: 'string',
            description:
              'The RFC 3339 offset timestamp from which to query backwards for packets. Must be within the last 24h. When this field is empty, defaults to time of request.',
            format: 'date-time',
          },
        },
        required: ['account_id', 'packet_limit', 'system', 'time_limit', 'type'],
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
            $ref: '#/$defs/pcap_filter',
          },
          packet_limit: {
            type: 'number',
            description: 'The limit of packets contained in a packet capture.',
          },
        },
        required: ['account_id', 'colo_name', 'destination_conf', 'system', 'time_limit', 'type'],
      },
    ],
    $defs: {
      pcap_filter: {
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
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.magicTransit.pcaps.create(body));
};

export default { metadata, tool, handler };
