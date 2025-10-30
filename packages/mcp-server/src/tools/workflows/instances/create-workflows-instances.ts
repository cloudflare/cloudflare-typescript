// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.instances',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/workflows/{workflow_name}/instances',
  operationId: 'wor-create-new-workflow-instance',
};

export const tool: Tool = {
  name: 'create_workflows_instances',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new workflow instance\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'queued',\n            'running',\n            'paused',\n            'errored',\n            'terminated',\n            'complete',\n            'waitingForPause',\n            'waiting'\n          ]\n        },\n        version_id: {\n          type: 'string'\n        },\n        workflow_id: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'status',\n        'version_id',\n        'workflow_id'\n      ]\n    },\n    success: {\n      type: 'string',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number'\n        },\n        per_page: {\n          type: 'number'\n        },\n        total_count: {\n          type: 'number'\n        },\n        cursor: {\n          type: 'string'\n        },\n        page: {\n          type: 'number'\n        }\n      },\n      required: [        'count',\n        'per_page',\n        'total_count'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      workflow_name: {
        type: 'string',
      },
      instance_id: {
        type: 'string',
      },
      instance_retention: {
        type: 'object',
        additionalProperties: true,
      },
      params: {
        type: 'object',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'workflow_name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { workflow_name, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.workflows.instances.create(workflow_name, body)),
  );
};

export default { metadata, tool, handler };
