// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pcaps',
  operationId: 'magic-pcap-collection-list-packet-capture-requests',
};

export const tool: Tool = {
  name: 'list_magic_transit_pcaps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all packet capture requests for an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        anyOf: [          {\n            $ref: '#/$defs/pcap'\n          },\n          {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The ID for the packet capture.'\n              },\n              byte_limit: {\n                type: 'number',\n                description: 'The maximum number of bytes to capture. This field only applies to `full` packet captures.'\n              },\n              colo_name: {\n                type: 'string',\n                description: 'The name of the data center used for the packet capture. This can be a specific colo (ord02) or a multi-colo name (ORD). This field only applies to `full` packet captures.'\n              },\n              destination_conf: {\n                type: 'string',\n                description: 'The full URI for the bucket. This field only applies to `full` packet captures.'\n              },\n              error_message: {\n                type: 'string',\n                description: 'An error message that describes why the packet capture failed. This field only applies to `full` packet captures.'\n              },\n              filter_v1: {\n                $ref: '#/$defs/pcap_filter'\n              },\n              packets_captured: {\n                type: 'integer',\n                description: 'The number of packets captured.'\n              },\n              status: {\n                type: 'string',\n                description: 'The status of the packet capture request.',\n                enum: [                  'unknown',\n                  'success',\n                  'pending',\n                  'running',\n                  'conversion_pending',\n                  'conversion_running',\n                  'complete',\n                  'failed'\n                ]\n              },\n              stop_requested: {\n                type: 'string',\n                description: 'The RFC 3339 timestamp when stopping the packet capture was requested. This field only applies to `full` packet captures.',\n                format: 'date-time'\n              },\n              submitted: {\n                type: 'string',\n                description: 'The RFC 3339 timestamp when the packet capture was created.'\n              },\n              system: {\n                type: 'string',\n                description: 'The system used to collect packet captures.',\n                enum: [                  'magic-transit'\n                ]\n              },\n              time_limit: {\n                type: 'number',\n                description: 'The packet capture duration in seconds.'\n              },\n              type: {\n                type: 'string',\n                description: 'The type of packet capture. `Simple` captures sampled packets, and `full` captures entire payloads and non-sampled packets.',\n                enum: [                  'simple',\n                  'full'\n                ]\n              }\n            }\n          }\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    pcap: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID for the packet capture.'\n        },\n        filter_v1: {\n          $ref: '#/$defs/pcap_filter'\n        },\n        offset_time: {\n          type: 'string',\n          description: 'The RFC 3339 offset timestamp from which to query backwards for packets. Must be within the last 24h. When this field is empty, defaults to time of request.',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the packet capture request.',\n          enum: [            'unknown',\n            'success',\n            'pending',\n            'running',\n            'conversion_pending',\n            'conversion_running',\n            'complete',\n            'failed'\n          ]\n        },\n        submitted: {\n          type: 'string',\n          description: 'The RFC 3339 timestamp when the packet capture was created.'\n        },\n        system: {\n          type: 'string',\n          description: 'The system used to collect packet captures.',\n          enum: [            'magic-transit'\n          ]\n        },\n        time_limit: {\n          type: 'number',\n          description: 'The packet capture duration in seconds.'\n        },\n        type: {\n          type: 'string',\n          description: 'The type of packet capture. `Simple` captures sampled packets, and `full` captures entire payloads and non-sampled packets.',\n          enum: [            'simple',\n            'full'\n          ]\n        }\n      }\n    },\n    pcap_filter: {\n      type: 'object',\n      description: 'The packet capture filter. When this field is empty, all packets are captured.',\n      properties: {\n        destination_address: {\n          type: 'string',\n          description: 'The destination IP address of the packet.'\n        },\n        destination_port: {\n          type: 'number',\n          description: 'The destination port of the packet.'\n        },\n        protocol: {\n          type: 'number',\n          description: 'The protocol number of the packet.'\n        },\n        source_address: {\n          type: 'string',\n          description: 'The source IP address of the packet.'\n        },\n        source_port: {\n          type: 'number',\n          description: 'The source port of the packet.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.magicTransit.pcaps.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
