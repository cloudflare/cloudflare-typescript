// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/pipelines/v1/pipelines',
  operationId: 'postV4AccountsByAccount_idPipelinesV1Pipelines',
};

export const tool: Tool = {
  name: 'create_v1_pipelines',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new Pipeline.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/pipeline_create_v1_response',\n  $defs: {\n    pipeline_create_v1_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Indicates a unique identifier for this pipeline.'\n        },\n        created_at: {\n          type: 'string'\n        },\n        modified_at: {\n          type: 'string'\n        },\n        name: {\n          type: 'string',\n          description: 'Indicates the name of the Pipeline.'\n        },\n        sql: {\n          type: 'string',\n          description: 'Specifies SQL for the Pipeline processing flow.'\n        },\n        status: {\n          type: 'string',\n          description: 'Indicates the current status of the Pipeline.'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'modified_at',\n        'name',\n        'sql',\n        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      name: {
        type: 'string',
        description: 'Specifies the name of the Pipeline.',
      },
      sql: {
        type: 'string',
        description: 'Specifies SQL for the Pipeline processing flow.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'name', 'sql'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.pipelines.createV1(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
