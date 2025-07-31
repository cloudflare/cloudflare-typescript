// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'diagnostics.traceroutes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/diagnostics/traceroute',
  operationId: 'diagnostics-traceroute',
};

export const tool: Tool = {
  name: 'create_diagnostics_traceroutes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRun traceroutes from Cloudflare colos.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/traceroute'\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    traceroute: {\n      type: 'object',\n      properties: {\n        colos: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              colo: {\n                type: 'object',\n                properties: {\n                  city: {\n                    type: 'string',\n                    description: 'Source colo city.'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Source colo name.'\n                  }\n                }\n              },\n              error: {\n                type: 'string',\n                description: 'Errors resulting from collecting traceroute from colo to target.',\n                enum: [                  '',\n                  'Could not gather traceroute data: Code 1',\n                  'Could not gather traceroute data: Code 2',\n                  'Could not gather traceroute data: Code 3',\n                  'Could not gather traceroute data: Code 4'\n                ]\n              },\n              hops: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    nodes: {\n                      type: 'array',\n                      description: 'An array of node objects.',\n                      items: {\n                        type: 'object',\n                        properties: {\n                          asn: {\n                            type: 'string',\n                            description: 'AS number associated with the node object.'\n                          },\n                          ip: {\n                            type: 'string',\n                            description: 'IP address of the node.'\n                          },\n                          labels: {\n                            type: 'array',\n                            description: 'Field appears if there is an additional annotation printed when the probe returns. Field also appears when running a GRE+ICMP traceroute to denote which traceroute a node comes from.',\n                            items: {\n                              type: 'string'\n                            }\n                          },\n                          max_rtt_ms: {\n                            type: 'number',\n                            description: 'Maximum RTT in ms.'\n                          },\n                          mean_rtt_ms: {\n                            type: 'number',\n                            description: 'Mean RTT in ms.'\n                          },\n                          min_rtt_ms: {\n                            type: 'number',\n                            description: 'Minimum RTT in ms.'\n                          },\n                          name: {\n                            type: 'string',\n                            description: 'Host name of the address, this may be the same as the IP address.'\n                          },\n                          packet_count: {\n                            type: 'integer',\n                            description: 'Number of packets with a response from this node.'\n                          },\n                          std_dev_rtt_ms: {\n                            type: 'number',\n                            description: 'Standard deviation of the RTTs in ms.'\n                          }\n                        }\n                      }\n                    },\n                    packets_lost: {\n                      type: 'integer',\n                      description: 'Number of packets where no response was received.'\n                    },\n                    packets_sent: {\n                      type: 'integer',\n                      description: 'Number of packets sent with specified TTL.'\n                    },\n                    packets_ttl: {\n                      type: 'integer',\n                      description: 'The time to live (TTL).'\n                    }\n                  }\n                }\n              },\n              target_summary: {\n                type: 'object',\n                description: 'Aggregated statistics from all hops about the target.'\n              },\n              traceroute_time_ms: {\n                type: 'integer',\n                description: 'Total time of traceroute in ms.'\n              }\n            }\n          }\n        },\n        target: {\n          type: 'string',\n          description: 'The target hostname, IPv6, or IPv6 address.'\n        }\n      }\n    }\n  }\n}\n```",
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
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'targets'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.diagnostics.traceroutes.create(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
