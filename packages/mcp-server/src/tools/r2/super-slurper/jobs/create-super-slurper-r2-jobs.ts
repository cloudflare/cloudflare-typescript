// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a job\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/job_create_response',\n  $defs: {\n    job_create_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
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
                required: ['accessKeyId', 'secretAccessKey'],
              },
              vendor: {
                type: 'string',
                enum: ['s3'],
              },
              endpoint: {
                type: 'string',
              },
              pathPrefix: {
                type: 'string',
              },
              region: {
                type: 'string',
              },
            },
            required: ['bucket', 'secret', 'vendor'],
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
                required: ['clientEmail', 'privateKey'],
              },
              vendor: {
                type: 'string',
                enum: ['gcs'],
              },
              pathPrefix: {
                type: 'string',
              },
            },
            required: ['bucket', 'secret', 'vendor'],
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
                  accessKeyId: {
                    type: 'string',
                  },
                  secretAccessKey: {
                    type: 'string',
                  },
                },
                required: ['accessKeyId', 'secretAccessKey'],
              },
              vendor: {
                $ref: '#/$defs/provider',
              },
              jurisdiction: {
                type: 'string',
                enum: ['default', 'eu', 'fedramp'],
              },
              pathPrefix: {
                type: 'string',
              },
            },
            required: ['bucket', 'secret', 'vendor'],
          },
        ],
      },
      target: {
        type: 'object',
        properties: {
          bucket: {
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
            required: ['accessKeyId', 'secretAccessKey'],
          },
          vendor: {
            $ref: '#/$defs/provider',
          },
          jurisdiction: {
            type: 'string',
            enum: ['default', 'eu', 'fedramp'],
          },
        },
        required: ['bucket', 'secret', 'vendor'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
    $defs: {
      provider: {
        type: 'string',
        enum: ['r2'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.r2.superSlurper.jobs.create(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
