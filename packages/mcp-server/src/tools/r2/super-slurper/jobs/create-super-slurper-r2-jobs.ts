// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.super_slurper.jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/slurper/jobs',
  operationId: 'slurper-create-job',
};

export const tool: Tool = {
  name: 'create_super_slurper_r2_jobs',
  description: 'Create a job',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      overwrite: {
        type: 'boolean',
      },
      source: {
        anyOf: [
          {
            type: 'object',
            properties: {
              bucket: {
                type: 'string',
              },
              endpoint: {
                type: 'string',
              },
              secret: {
                type: 'object',
                properties: {
                  accessKeyId: {
                    type: 'string',
                  },
                  secretAccessKey: {
                    type: 'string',
                  },
                },
                required: [],
              },
              vendor: {
                type: 'string',
                enum: ['s3'],
              },
            },
            required: [],
          },
          {
            type: 'object',
            properties: {
              bucket: {
                type: 'string',
              },
              secret: {
                type: 'object',
                properties: {
                  clientEmail: {
                    type: 'string',
                  },
                  privateKey: {
                    type: 'string',
                  },
                },
                required: [],
              },
              vendor: {
                type: 'string',
                enum: ['gcs'],
              },
            },
            required: [],
          },
          {
            type: 'object',
            properties: {
              bucket: {
                type: 'string',
              },
              jurisdiction: {
                type: 'string',
                enum: ['default', 'eu', 'fedramp'],
              },
              secret: {
                type: 'object',
                properties: {
                  accessKeyId: {
                    type: 'string',
                  },
                  secretAccessKey: {
                    type: 'string',
                  },
                },
                required: [],
              },
              vendor: {
                $ref: '#/$defs/provider',
              },
            },
            required: [],
          },
        ],
      },
      target: {
        type: 'object',
        properties: {
          bucket: {
            type: 'string',
          },
          jurisdiction: {
            type: 'string',
            enum: ['default', 'eu', 'fedramp'],
          },
          secret: {
            type: 'object',
            properties: {
              accessKeyId: {
                type: 'string',
              },
              secretAccessKey: {
                type: 'string',
              },
            },
            required: [],
          },
          vendor: {
            $ref: '#/$defs/provider',
          },
        },
        required: [],
      },
    },
    $defs: {
      provider: {
        type: 'string',
        enum: ['r2'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.r2.superSlurper.jobs.create(body));
};

export default { metadata, tool, handler };
