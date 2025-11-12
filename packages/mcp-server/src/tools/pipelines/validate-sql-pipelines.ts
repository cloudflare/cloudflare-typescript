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
  httpPath: '/accounts/{account_id}/pipelines/v1/validate_sql',
  operationId: 'postV4AccountsByAccount_idPipelinesV1Validate_sql',
};

export const tool: Tool = {
  name: 'validate_sql_pipelines',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nValidate Arroyo SQL.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/pipeline_validate_sql_response',\n  $defs: {\n    pipeline_validate_sql_response: {\n      type: 'object',\n      properties: {\n        tables: {\n          type: 'object',\n          description: 'Indicates tables involved in the processing.',\n          additionalProperties: true\n        },\n        graph: {\n          type: 'object',\n          properties: {\n            edges: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  dest_id: {\n                    type: 'integer'\n                  },\n                  edge_type: {\n                    type: 'string'\n                  },\n                  key_type: {\n                    type: 'string'\n                  },\n                  src_id: {\n                    type: 'integer'\n                  },\n                  value_type: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'dest_id',\n                  'edge_type',\n                  'key_type',\n                  'src_id',\n                  'value_type'\n                ]\n              }\n            },\n            nodes: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  description: {\n                    type: 'string'\n                  },\n                  node_id: {\n                    type: 'integer'\n                  },\n                  operator: {\n                    type: 'string'\n                  },\n                  parallelism: {\n                    type: 'integer'\n                  }\n                },\n                required: [                  'description',\n                  'node_id',\n                  'operator',\n                  'parallelism'\n                ]\n              }\n            }\n          },\n          required: [            'edges',\n            'nodes'\n          ]\n        }\n      },\n      required: [        'tables'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      sql: {
        type: 'string',
        description: 'Specifies SQL to validate.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'sql'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.pipelines.validateSql(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
