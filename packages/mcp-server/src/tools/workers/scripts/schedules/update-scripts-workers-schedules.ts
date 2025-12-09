// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.schedules',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/schedules',
  operationId: 'worker-cron-trigger-update-cron-triggers',
};

export const tool: Tool = {
  name: 'update_scripts_workers_schedules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates Cron Triggers for a Worker.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/schedule_update_response',\n  $defs: {\n    schedule_update_response: {\n      type: 'object',\n      properties: {\n        schedules: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              cron: {\n                type: 'string'\n              },\n              created_on: {\n                type: 'string'\n              },\n              modified_on: {\n                type: 'string'\n              }\n            },\n            required: [              'cron'\n            ]\n          }\n        }\n      },\n      required: [        'schedules'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
      },
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            cron: {
              type: 'string',
            },
            created_on: {
              type: 'string',
            },
            modified_on: {
              type: 'string',
            },
          },
          required: ['cron'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'script_name', 'body'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.workers.scripts.schedules.update(script_name, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
