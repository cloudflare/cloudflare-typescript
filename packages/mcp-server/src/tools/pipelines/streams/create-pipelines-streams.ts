// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines.streams',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/pipelines/v1/streams',
  operationId: 'postV4AccountsByAccount_idPipelinesV1Streams',
};

export const tool: Tool = {
  name: 'create_pipelines_streams',
  description: 'Create a new Stream.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      name: {
        type: 'string',
        description: 'Specifies the name of the Stream.',
      },
      format: {
        anyOf: [
          {
            type: 'object',
            title: 'Json',
            properties: {
              type: {
                type: 'string',
                enum: ['json'],
              },
              decimal_encoding: {
                type: 'string',
                enum: ['number', 'string', 'bytes'],
              },
              timestamp_format: {
                type: 'string',
                enum: ['rfc3339', 'unix_millis'],
              },
              unstructured: {
                type: 'boolean',
              },
            },
            required: ['type'],
          },
          {
            type: 'object',
            title: 'Parquet',
            properties: {
              type: {
                type: 'string',
                enum: ['parquet'],
              },
              compression: {
                type: 'string',
                enum: ['uncompressed', 'snappy', 'gzip', 'zstd', 'lz4'],
              },
              row_group_bytes: {
                type: 'integer',
              },
            },
            required: ['type'],
          },
        ],
      },
      http: {
        type: 'object',
        properties: {
          authentication: {
            type: 'boolean',
            description: 'Indicates that authentication is required for the HTTP endpoint.',
          },
          enabled: {
            type: 'boolean',
            description: 'Indicates that the HTTP endpoint is enabled.',
          },
          cors: {
            type: 'object',
            description: 'Specifies the CORS options for the HTTP endpoint.',
            properties: {
              origins: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
        },
        required: ['authentication', 'enabled'],
      },
      schema: {
        type: 'object',
        properties: {
          fields: {
            type: 'array',
            items: {
              anyOf: [
                {
                  type: 'object',
                  title: 'Int32',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['int32'],
                    },
                    metadata_key: {
                      type: 'string',
                    },
                    name: {
                      type: 'string',
                    },
                    required: {
                      type: 'boolean',
                    },
                    sql_name: {
                      type: 'string',
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  title: 'Int64',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['int64'],
                    },
                    metadata_key: {
                      type: 'string',
                    },
                    name: {
                      type: 'string',
                    },
                    required: {
                      type: 'boolean',
                    },
                    sql_name: {
                      type: 'string',
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  title: 'Float32',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['float32'],
                    },
                    metadata_key: {
                      type: 'string',
                    },
                    name: {
                      type: 'string',
                    },
                    required: {
                      type: 'boolean',
                    },
                    sql_name: {
                      type: 'string',
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  title: 'Float64',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['float64'],
                    },
                    metadata_key: {
                      type: 'string',
                    },
                    name: {
                      type: 'string',
                    },
                    required: {
                      type: 'boolean',
                    },
                    sql_name: {
                      type: 'string',
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  title: 'Bool',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['bool'],
                    },
                    metadata_key: {
                      type: 'string',
                    },
                    name: {
                      type: 'string',
                    },
                    required: {
                      type: 'boolean',
                    },
                    sql_name: {
                      type: 'string',
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  title: 'String',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['string'],
                    },
                    metadata_key: {
                      type: 'string',
                    },
                    name: {
                      type: 'string',
                    },
                    required: {
                      type: 'boolean',
                    },
                    sql_name: {
                      type: 'string',
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  title: 'Binary',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['binary'],
                    },
                    metadata_key: {
                      type: 'string',
                    },
                    name: {
                      type: 'string',
                    },
                    required: {
                      type: 'boolean',
                    },
                    sql_name: {
                      type: 'string',
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['timestamp'],
                    },
                    metadata_key: {
                      type: 'string',
                    },
                    name: {
                      type: 'string',
                    },
                    required: {
                      type: 'boolean',
                    },
                    sql_name: {
                      type: 'string',
                    },
                    unit: {
                      type: 'string',
                      enum: ['second', 'millisecond', 'microsecond', 'nanosecond'],
                    },
                  },
                  required: ['type'],
                },
                {
                  type: 'object',
                  title: 'Json',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['json'],
                    },
                    metadata_key: {
                      type: 'string',
                    },
                    name: {
                      type: 'string',
                    },
                    required: {
                      type: 'boolean',
                    },
                    sql_name: {
                      type: 'string',
                    },
                  },
                  required: ['type'],
                },
                {
                  allOf: [],
                  title: 'Struct',
                },
                {
                  allOf: [],
                  title: 'List',
                },
              ],
            },
          },
          format: {
            anyOf: [
              {
                type: 'object',
                title: 'Json',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['json'],
                  },
                  decimal_encoding: {
                    type: 'string',
                    enum: ['number', 'string', 'bytes'],
                  },
                  timestamp_format: {
                    type: 'string',
                    enum: ['rfc3339', 'unix_millis'],
                  },
                  unstructured: {
                    type: 'boolean',
                  },
                },
                required: ['type'],
              },
              {
                type: 'object',
                title: 'Parquet',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['parquet'],
                  },
                  compression: {
                    type: 'string',
                    enum: ['uncompressed', 'snappy', 'gzip', 'zstd', 'lz4'],
                  },
                  row_group_bytes: {
                    type: 'integer',
                  },
                },
                required: ['type'],
              },
            ],
          },
          inferred: {
            type: 'boolean',
          },
        },
      },
      worker_binding: {
        type: 'object',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Indicates that the worker binding is enabled.',
          },
        },
        required: ['enabled'],
      },
    },
    required: ['account_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.pipelines.streams.create(body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
