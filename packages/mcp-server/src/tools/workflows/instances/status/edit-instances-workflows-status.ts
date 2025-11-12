// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nChange status of instance\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/status_edit_response',\n  $defs: {\n    status_edit_response: {\n      type: 'object',\n      properties: {\n        status: {\n          type: 'string',\n          enum: [            'queued',\n            'running',\n            'paused',\n            'errored',\n            'terminated',\n            'complete',\n            'waitingForPause',\n            'waiting'\n          ]\n        },\n        timestamp: {\n          type: 'string',\n          description: 'Accepts ISO 8601 with no timezone offsets and in UTC.',\n          format: 'date-time'\n        }\n      },\n      required: [        'status',\n        'timestamp'\n      ]\n    }\n  }\n}\n```",
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
        enum: ['resume', 'pause', 'terminate', 'restart'],
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
  const { instance_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.workflows.instances.status.edit(instance_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
