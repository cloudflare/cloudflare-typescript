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
  httpPath: '/accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}/logs',
  operationId: 'ai-search-instance-list-job-logs',
};

export const tool: Tool = {
  name: 'logs_instances_aisearch_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Job Logs\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/job_logs_response',\n  $defs: {\n    job_logs_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          created_at: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          },\n          message_type: {\n            type: 'integer'\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'message',\n          'message_type'\n        ]\n      }\n    }\n  }\n}\n```",
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
      job_id: {
        type: 'string',
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
    required: ['account_id', 'id', 'job_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { job_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.aiSearch.instances.jobs.logs(job_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
