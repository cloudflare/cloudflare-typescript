// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.datasets.health',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/health',
  operationId: 'get_DOHealthCheck',
};

export const tool: Tool = {
  name: 'get_datasets_threat_events_cloudforce_one_health',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nBenchmark Durable Object warmup\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    properties: {\n      type: 'object',\n      properties: {\n        durationMs: {\n          type: 'object',\n          properties: {\n            type: {\n              type: 'string'\n            }\n          },\n          required: [            'type'\n          ]\n        },\n        ok: {\n          type: 'object',\n          properties: {\n            type: {\n              type: 'string'\n            }\n          },\n          required: [            'type'\n          ]\n        },\n        shards: {\n          type: 'object',\n          properties: {\n            items: {\n              type: 'object',\n              properties: {\n                properties: {\n                  type: 'object',\n                  properties: {\n                    datasetId: {\n                      type: 'object',\n                      properties: {\n                        type: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'type'\n                      ]\n                    },\n                    date: {\n                      type: 'object',\n                      properties: {\n                        type: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'type'\n                      ]\n                    },\n                    healthCheckMs: {\n                      type: 'object',\n                      properties: {\n                        type: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'type'\n                      ]\n                    },\n                    pageCount: {\n                      type: 'object',\n                      properties: {\n                        type: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'type'\n                      ]\n                    },\n                    pageSize: {\n                      type: 'object',\n                      properties: {\n                        type: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'type'\n                      ]\n                    },\n                    sizeBytes: {\n                      type: 'object',\n                      properties: {\n                        type: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'type'\n                      ]\n                    },\n                    sizeMB: {\n                      type: 'object',\n                      properties: {\n                        type: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'type'\n                      ]\n                    },\n                    startupMs: {\n                      type: 'object',\n                      properties: {\n                        type: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'type'\n                      ]\n                    },\n                    tableStats: {\n                      type: 'object',\n                      properties: {\n                        additionalProperties: {\n                          type: 'object',\n                          properties: {\n                            type: {\n                              type: 'string'\n                            }\n                          },\n                          required: [                            'type'\n                          ]\n                        },\n                        type: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'additionalProperties',\n                        'type'\n                      ]\n                    },\n                    timedOut: {\n                      type: 'object',\n                      properties: {\n                        type: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'type'\n                      ]\n                    },\n                    totalMs: {\n                      type: 'object',\n                      properties: {\n                        type: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'type'\n                      ]\n                    }\n                  },\n                  required: [                    'datasetId',\n                    'date',\n                    'healthCheckMs',\n                    'pageCount',\n                    'pageSize',\n                    'sizeBytes',\n                    'sizeMB',\n                    'startupMs',\n                    'tableStats',\n                    'timedOut',\n                    'totalMs'\n                  ]\n                },\n                type: {\n                  type: 'string'\n                }\n              },\n              required: [                'properties',\n                'type'\n              ]\n            },\n            type: {\n              type: 'string'\n            }\n          },\n          required: [            'items',\n            'type'\n          ]\n        },\n        totalShards: {\n          type: 'object',\n          properties: {\n            type: {\n              type: 'string'\n            }\n          },\n          required: [            'type'\n          ]\n        },\n        totalSizeBytes: {\n          type: 'object',\n          properties: {\n            type: {\n              type: 'string'\n            }\n          },\n          required: [            'type'\n          ]\n        },\n        totalSizeMB: {\n          type: 'object',\n          properties: {\n            type: {\n              type: 'string'\n            }\n          },\n          required: [            'type'\n          ]\n        }\n      },\n      required: [        'durationMs',\n        'ok',\n        'shards',\n        'totalShards',\n        'totalSizeBytes',\n        'totalSizeMB'\n      ]\n    },\n    type: {\n      type: 'string'\n    }\n  },\n  required: [    'properties',\n    'type'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      dataset_id: {
        type: 'string',
        description: 'Dataset ID.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'dataset_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { dataset_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.cloudforceOne.threatEvents.datasets.health.get(dataset_id, body),
    ),
  );
};

export default { metadata, tool, handler };
