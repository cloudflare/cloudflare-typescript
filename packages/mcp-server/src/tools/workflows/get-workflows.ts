// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workflows/{workflow_name}',
  operationId: 'wor-get-workflow-details',
};

export const tool: Tool = {
  name: 'get_workflows',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Workflow details\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/workflow_get_response',\n  $defs: {\n    workflow_get_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        class_name: {\n          type: 'string'\n        },\n        created_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        instances: {\n          type: 'object',\n          properties: {\n            complete: {\n              type: 'number'\n            },\n            errored: {\n              type: 'number'\n            },\n            paused: {\n              type: 'number'\n            },\n            queued: {\n              type: 'number'\n            },\n            running: {\n              type: 'number'\n            },\n            terminated: {\n              type: 'number'\n            },\n            waiting: {\n              type: 'number'\n            },\n            waitingForPause: {\n              type: 'number'\n            }\n          }\n        },\n        modified_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string'\n        },\n        script_name: {\n          type: 'string'\n        },\n        triggered_on: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'class_name',\n        'created_on',\n        'instances',\n        'modified_on',\n        'name',\n        'script_name',\n        'triggered_on'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      workflow_name: {
        type: 'string',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { workflow_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.workflows.get(workflow_name, body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
