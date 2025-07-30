// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.instances.status',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/status',
  operationId: 'wor-change-status-workflow-instance',
};

export const tool: Tool = {
  name: 'edit_instances_workflows_status',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nChange status of instance\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        status: {\n          type: 'string',\n          enum: [            'queued',\n            'running',\n            'paused',\n            'errored',\n            'terminated',\n            'complete',\n            'waitingForPause',\n            'waiting'\n          ]\n        },\n        timestamp: {\n          type: 'string',\n          description: 'Accepts ISO 8601 with no timezone offsets and in UTC.',\n          format: 'date-time'\n        }\n      },\n      required: [        'status',\n        'timestamp'\n      ]\n    },\n    success: {\n      type: 'string',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number'\n        },\n        per_page: {\n          type: 'number'\n        },\n        total_count: {\n          type: 'number'\n        },\n        next_cursor: {\n          type: 'string'\n        },\n        page: {\n          type: 'number'\n        }\n      },\n      required: [        'count',\n        'per_page',\n        'total_count'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
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
      status: {
        type: 'string',
        description: 'Apply action to instance.',
        enum: ['resume', 'pause', 'terminate'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'workflow_name', 'instance_id', 'status'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { instance_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.workflows.instances.status.edit(instance_id, body)),
  );
};

export default { metadata, tool, handler };
