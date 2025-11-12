// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.traceroute_tests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/traceroute-tests/{test_id}',
  operationId: 'dex-endpoints-traceroute-test-details',
};

export const tool: Tool = {
  name: 'get_dex_zero_trust_traceroute_tests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet test details and aggregate performance metrics for an traceroute test for a given time period between 1 hour and 7 days.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/traceroute',\n  $defs: {\n    traceroute: {\n      type: 'object',\n      properties: {\n        host: {\n          type: 'string',\n          description: 'The host of the Traceroute synthetic application test'\n        },\n        interval: {\n          type: 'string',\n          description: 'The interval at which the Traceroute synthetic application test is set to run.'\n        },\n        kind: {\n          type: 'string',\n          enum: [            'traceroute'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the Traceroute synthetic application test'\n        },\n        target_policies: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/digital_experience_monitor'\n          }\n        },\n        targeted: {\n          type: 'boolean'\n        },\n        tracerouteStats: {\n          type: 'object',\n          properties: {\n            availabilityPct: {\n              type: 'object',\n              properties: {\n                slots: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      timestamp: {\n                        type: 'string'\n                      },\n                      value: {\n                        type: 'number'\n                      }\n                    },\n                    required: [                      'timestamp',\n                      'value'\n                    ]\n                  }\n                },\n                avg: {\n                  type: 'number',\n                  description: 'average observed in the time period'\n                },\n                max: {\n                  type: 'number',\n                  description: 'highest observed in the time period'\n                },\n                min: {\n                  type: 'number',\n                  description: 'lowest  observed in the time period'\n                }\n              },\n              required: [                'slots'\n              ]\n            },\n            hopsCount: {\n              $ref: '#/$defs/test_stat_over_time'\n            },\n            packetLossPct: {\n              type: 'object',\n              properties: {\n                slots: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      timestamp: {\n                        type: 'string'\n                      },\n                      value: {\n                        type: 'number'\n                      }\n                    },\n                    required: [                      'timestamp',\n                      'value'\n                    ]\n                  }\n                },\n                avg: {\n                  type: 'number',\n                  description: 'average observed in the time period'\n                },\n                max: {\n                  type: 'number',\n                  description: 'highest observed in the time period'\n                },\n                min: {\n                  type: 'number',\n                  description: 'lowest  observed in the time period'\n                }\n              },\n              required: [                'slots'\n              ]\n            },\n            roundTripTimeMs: {\n              $ref: '#/$defs/test_stat_over_time'\n            },\n            uniqueDevicesTotal: {\n              type: 'integer',\n              description: 'Count of unique devices that have run this test in the given time period'\n            }\n          },\n          required: [            'availabilityPct',\n            'hopsCount',\n            'packetLossPct',\n            'roundTripTimeMs',\n            'uniqueDevicesTotal'\n          ]\n        },\n        tracerouteStatsByColo: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              availabilityPct: {\n                type: 'object',\n                properties: {\n                  slots: {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        timestamp: {\n                          type: 'string'\n                        },\n                        value: {\n                          type: 'number'\n                        }\n                      },\n                      required: [                        'timestamp',\n                        'value'\n                      ]\n                    }\n                  },\n                  avg: {\n                    type: 'number',\n                    description: 'average observed in the time period'\n                  },\n                  max: {\n                    type: 'number',\n                    description: 'highest observed in the time period'\n                  },\n                  min: {\n                    type: 'number',\n                    description: 'lowest  observed in the time period'\n                  }\n                },\n                required: [                  'slots'\n                ]\n              },\n              colo: {\n                type: 'string'\n              },\n              hopsCount: {\n                $ref: '#/$defs/test_stat_over_time'\n              },\n              packetLossPct: {\n                type: 'object',\n                properties: {\n                  slots: {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        timestamp: {\n                          type: 'string'\n                        },\n                        value: {\n                          type: 'number'\n                        }\n                      },\n                      required: [                        'timestamp',\n                        'value'\n                      ]\n                    }\n                  },\n                  avg: {\n                    type: 'number',\n                    description: 'average observed in the time period'\n                  },\n                  max: {\n                    type: 'number',\n                    description: 'highest observed in the time period'\n                  },\n                  min: {\n                    type: 'number',\n                    description: 'lowest  observed in the time period'\n                  }\n                },\n                required: [                  'slots'\n                ]\n              },\n              roundTripTimeMs: {\n                $ref: '#/$defs/test_stat_over_time'\n              },\n              uniqueDevicesTotal: {\n                type: 'integer',\n                description: 'Count of unique devices that have run this test in the given time period'\n              }\n            },\n            required: [              'availabilityPct',\n              'colo',\n              'hopsCount',\n              'packetLossPct',\n              'roundTripTimeMs',\n              'uniqueDevicesTotal'\n            ]\n          }\n        }\n      },\n      required: [        'host',\n        'interval',\n        'kind',\n        'name'\n      ]\n    },\n    digital_experience_monitor: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        default: {\n          type: 'boolean',\n          description: 'Whether the policy is the default for the account'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'default',\n        'name'\n      ]\n    },\n    test_stat_over_time: {\n      type: 'object',\n      properties: {\n        slots: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              timestamp: {\n                type: 'string'\n              },\n              value: {\n                type: 'integer'\n              }\n            },\n            required: [              'timestamp',\n              'value'\n            ]\n          }\n        },\n        avg: {\n          type: 'integer',\n          description: 'average observed in the time period'\n        },\n        max: {\n          type: 'integer',\n          description: 'highest observed in the time period'\n        },\n        min: {\n          type: 'integer',\n          description: 'lowest observed in the time period'\n        }\n      },\n      required: [        'slots'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      test_id: {
        type: 'string',
        description: 'API Resource UUID tag.',
      },
      from: {
        type: 'string',
        description: 'Start time for aggregate metrics in ISO ms',
      },
      interval: {
        type: 'string',
        description: 'Time interval for aggregate time slots.',
        enum: ['minute', 'hour'],
      },
      to: {
        type: 'string',
        description: 'End time for aggregate metrics in ISO ms',
      },
      colo: {
        type: 'string',
        description:
          'Optionally filter result stats to a Cloudflare colo. Cannot be used in combination with deviceId param.',
      },
      deviceId: {
        type: 'array',
        description:
          'Optionally filter result stats to a specific device(s). Cannot be used in combination with colo param.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'test_id', 'from', 'interval', 'to'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { test_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.dex.tracerouteTests.get(test_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
