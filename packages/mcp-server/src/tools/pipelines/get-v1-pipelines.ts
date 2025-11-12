// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pipelines/v1/pipelines/{pipeline_id}',
  operationId: 'getV4AccountsByAccount_idPipelinesV1PipelinesByPipeline_id',
};

export const tool: Tool = {
  name: 'get_v1_pipelines',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Pipelines Details.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/pipeline_get_v1_response',\n  $defs: {\n    pipeline_get_v1_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Indicates a unique identifier for this pipeline.'\n        },\n        created_at: {\n          type: 'string'\n        },\n        modified_at: {\n          type: 'string'\n        },\n        name: {\n          type: 'string',\n          description: 'Indicates the name of the Pipeline.'\n        },\n        sql: {\n          type: 'string',\n          description: 'Specifies SQL for the Pipeline processing flow.'\n        },\n        status: {\n          type: 'string',\n          description: 'Indicates the current status of the Pipeline.'\n        },\n        tables: {\n          type: 'array',\n          description: 'List of streams and sinks used by this pipeline.',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the connection (stream or sink).'\n              },\n              latest: {\n                type: 'integer',\n                description: 'Latest available version of the connection.'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the connection.'\n              },\n              type: {\n                type: 'string',\n                description: 'Type of the connection.',\n                enum: [                  'stream',\n                  'sink'\n                ]\n              },\n              version: {\n                type: 'integer',\n                description: 'Current version of the connection used by this pipeline.'\n              }\n            },\n            required: [              'id',\n              'latest',\n              'name',\n              'type',\n              'version'\n            ]\n          }\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'modified_at',\n        'name',\n        'sql',\n        'status',\n        'tables'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      pipeline_id: {
        type: 'string',
        description: 'Specifies the public ID of the pipeline.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'pipeline_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pipeline_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.pipelines.getV1(pipeline_id, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
