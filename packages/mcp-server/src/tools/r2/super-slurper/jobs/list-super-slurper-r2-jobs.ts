// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.super_slurper.jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/slurper/jobs',
  operationId: 'slurper-list-jobs',
};

export const tool: Tool = {
  name: 'list_super_slurper_r2_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList jobs\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          createdAt: {\n            type: 'string'\n          },\n          finishedAt: {\n            type: 'string'\n          },\n          overwrite: {\n            type: 'boolean'\n          },\n          source: {\n            anyOf: [              {\n                type: 'object',\n                title: 'S3SourceResponseSchema',\n                properties: {\n                  bucket: {\n                    type: 'string'\n                  },\n                  endpoint: {\n                    type: 'string'\n                  },\n                  pathPrefix: {\n                    type: 'string'\n                  },\n                  vendor: {\n                    type: 'string',\n                    enum: [                      's3'\n                    ]\n                  }\n                }\n              },\n              {\n                type: 'object',\n                title: 'GCSSourceResponseSchema',\n                properties: {\n                  bucket: {\n                    type: 'string'\n                  },\n                  pathPrefix: {\n                    type: 'string'\n                  },\n                  vendor: {\n                    type: 'string',\n                    enum: [                      'gcs'\n                    ]\n                  }\n                }\n              },\n              {\n                type: 'object',\n                title: 'R2SourceResponseSchema',\n                properties: {\n                  bucket: {\n                    type: 'string'\n                  },\n                  jurisdiction: {\n                    type: 'string',\n                    enum: [                      'default',\n                      'eu',\n                      'fedramp'\n                    ]\n                  },\n                  pathPrefix: {\n                    type: 'string'\n                  },\n                  vendor: {\n                    $ref: '#/$defs/provider'\n                  }\n                }\n              }\n            ]\n          },\n          status: {\n            type: 'string',\n            enum: [              'running',\n              'paused',\n              'aborted',\n              'completed'\n            ]\n          },\n          target: {\n            type: 'object',\n            title: 'R2TargetResponseSchema',\n            properties: {\n              bucket: {\n                type: 'string'\n              },\n              jurisdiction: {\n                type: 'string',\n                enum: [                  'default',\n                  'eu',\n                  'fedramp'\n                ]\n              },\n              vendor: {\n                $ref: '#/$defs/provider'\n              }\n            }\n          }\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Indicates if the API call was successful or not.',\n      enum: [        true\n      ]\n    }\n  },\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    provider: {\n      type: 'string',\n      enum: [        'r2'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.r2.superSlurper.jobs.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
