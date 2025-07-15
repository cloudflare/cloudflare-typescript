// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.instances',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workflows/{workflow_name}/instances',
  operationId: 'wor-list-workflow-instances',
};

export const tool: Tool = {
  name: 'list_workflows_instances',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList of workflow instances\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          created_on: {\n            type: 'string',\n            format: 'date-time'\n          },\n          ended_on: {\n            type: 'string',\n            format: 'date-time'\n          },\n          modified_on: {\n            type: 'string',\n            format: 'date-time'\n          },\n          started_on: {\n            type: 'string',\n            format: 'date-time'\n          },\n          status: {\n            type: 'string',\n            enum: [              'queued',\n              'running',\n              'paused',\n              'errored',\n              'terminated',\n              'complete',\n              'waitingForPause',\n              'waiting'\n            ]\n          },\n          version_id: {\n            type: 'string'\n          },\n          workflow_id: {\n            type: 'string'\n          }\n        },\n        required: [          'id',\n          'created_on',\n          'ended_on',\n          'modified_on',\n          'started_on',\n          'status',\n          'version_id',\n          'workflow_id'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number'\n        },\n        page: {\n          type: 'number'\n        },\n        per_page: {\n          type: 'number'\n        },\n        total_count: {\n          type: 'number'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      workflow_name: {
        type: 'string',
      },
      date_end: {
        type: 'string',
        description: 'Accepts ISO 8601 with no timezone offsets and in UTC.',
        format: 'date-time',
      },
      date_start: {
        type: 'string',
        description: 'Accepts ISO 8601 with no timezone offsets and in UTC.',
        format: 'date-time',
      },
      page: {
        type: 'number',
      },
      per_page: {
        type: 'number',
      },
      status: {
        type: 'string',
        enum: [
          'queued',
          'running',
          'paused',
          'errored',
          'terminated',
          'complete',
          'waitingForPause',
          'waiting',
        ],
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
  const { workflow_name, ...body } = args as any;
  const response = await client.workflows.instances.list(workflow_name, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
