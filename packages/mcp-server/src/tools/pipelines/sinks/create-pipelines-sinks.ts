// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines.sinks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/pipelines/v1/sinks',
  operationId: 'postV4AccountsByAccount_idPipelinesV1Sinks',
};

export const tool: Tool = {
  name: 'create_pipelines_sinks',
  description: 'Create a new Sink.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      name: {
        type: 'string',
        description: 'Defines the name of the Sink.',
      },
      type: {
        type: 'string',
        description: 'Specifies the type of sink.',
        enum: ['r2', 'r2_data_catalog'],
      },
      config: {
        anyOf: [
          {
            type: 'object',
            title: 'R2 Sink',
            properties: {
              account_id: {
                type: 'string',
                title: 'Account ID',
                description: 'Cloudflare Account ID for the bucket',
              },
              bucket: {
                type: 'string',
                title: 'Bucket',
                description: 'R2 Bucket to write to',
              },
              credentials: {
                type: 'object',
                title: 'R2 Credentials',
                properties: {
                  access_key_id: {
                    type: 'string',
                    title: 'Access Key ID',
                    description: 'Cloudflare Account ID for the bucket',
                  },
                  secret_access_key: {
                    type: 'string',
                    title: 'Access Key ID',
                    description: 'Cloudflare Account ID for the bucket',
                  },
                },
                required: ['access_key_id', 'secret_access_key'],
              },
              file_naming: {
                type: 'object',
                title: 'File Naming',
                description: 'Controls filename prefix/suffix and strategy.',
                properties: {
                  prefix: {
                    type: 'string',
                    title: 'Filename Prefix',
                    description: 'The prefix to use in file name. i.e prefix-<uuid>.parquet',
                  },
                  strategy: {
                    type: 'string',
                    title: 'Filename Strategy',
                    description: 'Filename generation strategy.',
                    enum: ['serial', 'uuid', 'uuid_v7', 'ulid'],
                  },
                  suffix: {
                    type: 'string',
                    title: 'Filename Suffix',
                    description:
                      'This will overwrite the default file suffix. i.e .parquet, use with caution',
                  },
                },
              },
              jurisdiction: {
                type: 'string',
                title: 'Jurisdiction',
                description: 'Jurisdiction this bucket is hosted in',
              },
              partitioning: {
                type: 'object',
                title: 'Partitioning Configuration',
                description: 'Data-layout partitioning for sinks.',
                properties: {
                  time_pattern: {
                    type: 'string',
                    title: 'Time Partition Pattern',
                    description: 'The pattern of the date string',
                  },
                },
              },
              path: {
                type: 'string',
                title: 'Path',
                description: 'Subpath within the bucket to write to',
              },
              rolling_policy: {
                type: 'object',
                title: 'File Rolling Policy',
                description: 'Rolling policy for file sinks (when & why to close a file and open a new one).',
                properties: {
                  file_size_bytes: {
                    type: 'integer',
                    title: 'File Size',
                    description: 'Files will be rolled after reaching this number of bytes',
                  },
                  inactivity_seconds: {
                    type: 'integer',
                    title: 'Inactivity Seconds',
                    description: 'Number of seconds of inactivity to wait before rolling over to a new file',
                  },
                  interval_seconds: {
                    type: 'integer',
                    title: 'Interval Seconds',
                    description: 'Number of seconds to wait before rolling over to a new file',
                  },
                },
              },
            },
            required: ['account_id', 'bucket', 'credentials'],
          },
          {
            type: 'object',
            title: 'R2DataCatalogSinkTable',
            description: 'R2 Data Catalog Sink',
            properties: {
              token: {
                type: 'string',
                description: 'Authentication token',
              },
              account_id: {
                type: 'string',
                description: 'Cloudflare Account ID',
              },
              bucket: {
                type: 'string',
                description: 'The R2 Bucket that hosts this catalog',
              },
              table_name: {
                type: 'string',
                title: 'Table Name',
                description: 'Table name',
              },
              namespace: {
                type: 'string',
                title: 'Namespace',
                description: 'Table namespace',
              },
              rolling_policy: {
                type: 'object',
                title: 'File Rolling Policy',
                description: 'Rolling policy for file sinks (when & why to close a file and open a new one).',
                properties: {
                  file_size_bytes: {
                    type: 'integer',
                    title: 'File Size',
                    description: 'Files will be rolled after reaching this number of bytes',
                  },
                  inactivity_seconds: {
                    type: 'integer',
                    title: 'Inactivity Seconds',
                    description: 'Number of seconds of inactivity to wait before rolling over to a new file',
                  },
                  interval_seconds: {
                    type: 'integer',
                    title: 'Interval Seconds',
                    description: 'Number of seconds to wait before rolling over to a new file',
                  },
                },
              },
            },
            required: ['token', 'account_id', 'bucket', 'table_name'],
          },
        ],
        description: 'Defines the configuration of the R2 Sink.',
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
    },
    required: ['account_id', 'name', 'type'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.pipelines.sinks.create(body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
