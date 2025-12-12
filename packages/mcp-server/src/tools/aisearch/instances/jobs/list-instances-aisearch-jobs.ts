// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_search.instances.jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/ai-search/instances/{id}/jobs',
  operationId: 'ai-search-instance-list-jobs',
};

export const tool: Tool = {
  name: 'list_instances_aisearch_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Jobs\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/job_list_response'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer'\n        },\n        page: {\n          type: 'integer'\n        },\n        per_page: {\n          type: 'integer'\n        },\n        total_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'result_info',\n    'success'\n  ],\n  $defs: {\n    job_list_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        source: {\n          type: 'string',\n          enum: [            'user',\n            'schedule'\n          ]\n        },\n        end_reason: {\n          type: 'string'\n        },\n        ended_at: {\n          type: 'string'\n        },\n        last_seen_at: {\n          type: 'string'\n        },\n        started_at: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'source'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
        description: 'Use your AI Search ID.',
      },
      page: {
        type: 'integer',
      },
      per_page: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  const response = await client.aiSearch.instances.jobs.list(id, body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
