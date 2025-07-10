// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pipelines/{pipeline_name}',
  operationId: 'getV4AccountsByAccount_idPipelinesByPipeline_name',
};

export const tool: Tool = {
  name: 'get_pipelines',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet configuration of a pipeline.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      description: 'Describes the configuration of a pipeline.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Specifies the pipeline identifier.'\n        },\n        destination: {\n          type: 'object',\n          properties: {\n            batch: {\n              type: 'object',\n              properties: {\n                max_bytes: {\n                  type: 'integer',\n                  description: 'Specifies rough maximum size of files.'\n                },\n                max_duration_s: {\n                  type: 'number',\n                  description: 'Specifies duration to wait to aggregate batches files.'\n                },\n                max_rows: {\n                  type: 'integer',\n                  description: 'Specifies rough maximum number of rows per file.'\n                }\n              },\n              required: [                'max_bytes',\n                'max_duration_s',\n                'max_rows'\n              ]\n            },\n            compression: {\n              type: 'object',\n              properties: {\n                type: {\n                  type: 'string',\n                  description: 'Specifies the desired compression algorithm and format.',\n                  enum: [                    'none',\n                    'gzip',\n                    'deflate'\n                  ]\n                }\n              },\n              required: [                'type'\n              ]\n            },\n            format: {\n              type: 'string',\n              description: 'Specifies the format of data to deliver.',\n              enum: [                'json'\n              ]\n            },\n            path: {\n              type: 'object',\n              properties: {\n                bucket: {\n                  type: 'string',\n                  description: 'Specifies the R2 Bucket to store files.'\n                },\n                filename: {\n                  type: 'string',\n                  description: 'Specifies the name pattern to for individual data files.'\n                },\n                filepath: {\n                  type: 'string',\n                  description: 'Specifies the name pattern for directory.'\n                },\n                prefix: {\n                  type: 'string',\n                  description: 'Specifies the base directory within the bucket.'\n                }\n              },\n              required: [                'bucket'\n              ]\n            },\n            type: {\n              type: 'string',\n              description: 'Specifies the type of destination.',\n              enum: [                'r2'\n              ]\n            }\n          },\n          required: [            'batch',\n            'compression',\n            'format',\n            'path',\n            'type'\n          ]\n        },\n        endpoint: {\n          type: 'string',\n          description: 'Indicates the endpoint URL to send traffic.'\n        },\n        name: {\n          type: 'string',\n          description: 'Defines the name of the pipeline.'\n        },\n        source: {\n          type: 'array',\n          items: {\n            anyOf: [              {\n                type: 'object',\n                properties: {\n                  format: {\n                    type: 'string',\n                    description: 'Specifies the format of source data.',\n                    enum: [                      'json'\n                    ]\n                  },\n                  type: {\n                    type: 'string'\n                  },\n                  authentication: {\n                    type: 'boolean',\n                    description: 'Specifies whether authentication is required to send to this pipeline via HTTP.'\n                  },\n                  cors: {\n                    type: 'object',\n                    properties: {\n                      origins: {\n                        type: 'array',\n                        description: 'Specifies allowed origins to allow Cross Origin HTTP Requests.',\n                        items: {\n                          type: 'string'\n                        }\n                      }\n                    },\n                    required: []\n                  }\n                },\n                required: [                  'format',\n                  'type'\n                ]\n              },\n              {\n                type: 'object',\n                properties: {\n                  format: {\n                    type: 'string',\n                    description: 'Specifies the format of source data.',\n                    enum: [                      'json'\n                    ]\n                  },\n                  type: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'format',\n                  'type'\n                ]\n              }\n            ]\n          }\n        },\n        version: {\n          type: 'number',\n          description: 'Indicates the version number of last saved configuration.'\n        }\n      },\n      required: [        'id',\n        'destination',\n        'endpoint',\n        'name',\n        'source',\n        'version'\n      ]\n    },\n    success: {\n      type: 'boolean',\n      description: 'Indicates whether the API call was successful.'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pipeline_name, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.pipelines.get(pipeline_name, body)));
};

export default { metadata, tool, handler };
