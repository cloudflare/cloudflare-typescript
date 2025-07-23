// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/pipelines/{pipeline_name}',
  operationId: 'putV4AccountsByAccount_idPipelinesByPipeline_name',
};

export const tool: Tool = {
  name: 'update_pipelines',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing pipeline.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      pipeline_name: {
        type: 'string',
        description: 'Defines the name of the pipeline.',
      },
      destination: {
        type: 'object',
        properties: {
          batch: {
            type: 'object',
            properties: {
              max_bytes: {
                type: 'integer',
                description: 'Specifies rough maximum size of files.',
              },
              max_duration_s: {
                type: 'number',
                description: 'Specifies duration to wait to aggregate batches files.',
              },
              max_rows: {
                type: 'integer',
                description: 'Specifies rough maximum number of rows per file.',
              },
            },
          },
          compression: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                description: 'Specifies the desired compression algorithm and format.',
                enum: ['none', 'gzip', 'deflate'],
              },
            },
          },
          format: {
            type: 'string',
            description: 'Specifies the format of data to deliver.',
            enum: ['json'],
          },
          path: {
            type: 'object',
            properties: {
              bucket: {
                type: 'string',
                description: 'Specifies the R2 Bucket to store files.',
              },
              filename: {
                type: 'string',
                description: 'Specifies the name pattern to for individual data files.',
              },
              filepath: {
                type: 'string',
                description: 'Specifies the name pattern for directory.',
              },
              prefix: {
                type: 'string',
                description: 'Specifies the base directory within the bucket.',
              },
            },
            required: ['bucket'],
          },
          type: {
            type: 'string',
            description: 'Specifies the type of destination.',
            enum: ['r2'],
          },
          credentials: {
            type: 'object',
            properties: {
              access_key_id: {
                type: 'string',
                description: 'Specifies the R2 Bucket Access Key Id.',
              },
              endpoint: {
                type: 'string',
                description: 'Specifies the R2 Endpoint.',
              },
              secret_access_key: {
                type: 'string',
                description: 'Specifies the R2 Bucket Secret Access Key.',
              },
            },
            required: ['access_key_id', 'endpoint', 'secret_access_key'],
          },
        },
        required: ['batch', 'compression', 'format', 'path', 'type'],
      },
      name: {
        type: 'string',
        description: 'Defines the name of the pipeline.',
      },
      source: {
        type: 'array',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                format: {
                  type: 'string',
                  description: 'Specifies the format of source data.',
                  enum: ['json'],
                },
                type: {
                  type: 'string',
                },
                authentication: {
                  type: 'boolean',
                  description:
                    'Specifies whether authentication is required to send to this pipeline via HTTP.',
                },
                cors: {
                  type: 'object',
                  properties: {
                    origins: {
                      type: 'array',
                      description: 'Specifies allowed origins to allow Cross Origin HTTP Requests.',
                      items: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
              required: ['format', 'type'],
            },
            {
              type: 'object',
              properties: {
                format: {
                  type: 'string',
                  description: 'Specifies the format of source data.',
                  enum: ['json'],
                },
                type: {
                  type: 'string',
                },
              },
              required: ['format', 'type'],
            },
          ],
        },
      },
    },
    required: ['account_id', 'pipeline_name', 'destination', 'name', 'source'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pipeline_name, ...body } = args as any;
  return asTextContentResult(await client.pipelines.update(pipeline_name, body));
};

export default { metadata, tool, handler };
