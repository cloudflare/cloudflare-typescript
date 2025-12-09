// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pcaps/{pcap_id}',
  operationId: 'magic-pcap-collection-get-pcap-request',
};

export const tool: Tool = {
  name: 'get_magic_transit_pcaps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet information for a PCAP request by id.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/pcap_get_response',\n  $defs: {\n    pcap_get_response: {\n      anyOf: [        {\n          $ref: '#/$defs/pcap'\n        },\n        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID for the packet capture.'\n            },\n            byte_limit: {\n              type: 'number',\n              description: 'The maximum number of bytes to capture. This field only applies to `full` packet captures.'\n            },\n            colo_name: {\n              type: 'string',\n              description: 'The name of the data center used for the packet capture. This can be a specific colo (ord02) or a multi-colo name (ORD). This field only applies to `full` packet captures.'\n            },\n            destination_conf: {\n              type: 'string',\n              description: 'The full URI for the bucket. This field only applies to `full` packet captures.'\n            },\n            error_message: {\n              type: 'string',\n              description: 'An error message that describes why the packet capture failed. This field only applies to `full` packet captures.'\n            },\n            filter_v1: {\n              $ref: '#/$defs/pcap_filter'\n            },\n            packets_captured: {\n              type: 'integer',\n              description: 'The number of packets captured.'\n            },\n            status: {\n              type: 'string',\n              description: 'The status of the packet capture request.',\n              enum: [                'unknown',\n                'success',\n                'pending',\n                'running',\n                'conversion_pending',\n                'conversion_running',\n                'complete',\n                'failed'\n              ]\n            },\n            stop_requested: {\n              type: 'string',\n              description: 'The RFC 3339 timestamp when stopping the packet capture was requested. This field only applies to `full` packet captures.',\n              format: 'date-time'\n            },\n            submitted: {\n              type: 'string',\n              description: 'The RFC 3339 timestamp when the packet capture was created.'\n            },\n            system: {\n              type: 'string',\n              description: 'The system used to collect packet captures.',\n              enum: [                'magic-transit'\n              ]\n            },\n            time_limit: {\n              type: 'number',\n              description: 'The packet capture duration in seconds.'\n            },\n            type: {\n              type: 'string',\n              description: 'The type of packet capture. `Simple` captures sampled packets, and `full` captures entire payloads and non-sampled packets.',\n              enum: [                'simple',\n                'full'\n              ]\n            }\n          }\n        }\n      ]\n    },\n    pcap: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID for the packet capture.'\n        },\n        filter_v1: {\n          $ref: '#/$defs/pcap_filter'\n        },\n        offset_time: {\n          type: 'string',\n          description: 'The RFC 3339 offset timestamp from which to query backwards for packets. Must be within the last 24h. When this field is empty, defaults to time of request.',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the packet capture request.',\n          enum: [            'unknown',\n            'success',\n            'pending',\n            'running',\n            'conversion_pending',\n            'conversion_running',\n            'complete',\n            'failed'\n          ]\n        },\n        submitted: {\n          type: 'string',\n          description: 'The RFC 3339 timestamp when the packet capture was created.'\n        },\n        system: {\n          type: 'string',\n          description: 'The system used to collect packet captures.',\n          enum: [            'magic-transit'\n          ]\n        },\n        time_limit: {\n          type: 'number',\n          description: 'The packet capture duration in seconds.'\n        },\n        type: {\n          type: 'string',\n          description: 'The type of packet capture. `Simple` captures sampled packets, and `full` captures entire payloads and non-sampled packets.',\n          enum: [            'simple',\n            'full'\n          ]\n        }\n      }\n    },\n    pcap_filter: {\n      type: 'object',\n      description: 'The packet capture filter. When this field is empty, all packets are captured.',\n      properties: {\n        destination_address: {\n          type: 'string',\n          description: 'The destination IP address of the packet.'\n        },\n        destination_port: {\n          type: 'number',\n          description: 'The destination port of the packet.'\n        },\n        protocol: {\n          type: 'number',\n          description: 'The protocol number of the packet.'\n        },\n        source_address: {\n          type: 'string',\n          description: 'The source IP address of the packet.'\n        },\n        source_port: {\n          type: 'number',\n          description: 'The source port of the packet.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      pcap_id: {
        type: 'string',
        description: 'Identifier.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'pcap_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pcap_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.magicTransit.pcaps.get(pcap_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
