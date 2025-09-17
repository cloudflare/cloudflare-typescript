// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workflows',
  operationId: 'wor-list-workflows',
};

export const tool: Tool = {
  name: 'list_workflows',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Workflows\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          class_name: {\n            type: 'string'\n          },\n          created_on: {\n            type: 'string',\n            format: 'date-time'\n          },\n          instances: {\n            type: 'object',\n            properties: {\n              complete: {\n                type: 'number'\n              },\n              errored: {\n                type: 'number'\n              },\n              paused: {\n                type: 'number'\n              },\n              queued: {\n                type: 'number'\n              },\n              running: {\n                type: 'number'\n              },\n              terminated: {\n                type: 'number'\n              },\n              waiting: {\n                type: 'number'\n              },\n              waitingForPause: {\n                type: 'number'\n              }\n            }\n          },\n          modified_on: {\n            type: 'string',\n            format: 'date-time'\n          },\n          name: {\n            type: 'string'\n          },\n          script_name: {\n            type: 'string'\n          },\n          triggered_on: {\n            type: 'string',\n            format: 'date-time'\n          }\n        },\n        required: [          'id',\n          'class_name',\n          'created_on',\n          'instances',\n          'modified_on',\n          'name',\n          'script_name',\n          'triggered_on'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number'\n        },\n        per_page: {\n          type: 'number'\n        },\n        total_count: {\n          type: 'number'\n        },\n        cursor: {\n          type: 'string'\n        },\n        page: {\n          type: 'number'\n        }\n      },\n      required: [        'count',\n        'per_page',\n        'total_count'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      page: {
        type: 'number',
      },
      per_page: {
        type: 'number',
      },
      search: {
        type: 'string',
        description: 'Allows filtering workflows` name.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.workflows.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
