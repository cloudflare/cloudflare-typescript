// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'calls.sfu',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/calls/apps/{app_id}',
  operationId: 'calls-apps-update-app-details',
};

export const tool: Tool = {
  name: 'update_calls_sfu',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEdit details for a single app.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sfu_update_response',\n  $defs: {\n    sfu_update_response: {\n      type: 'object',\n      properties: {\n        created: {\n          type: 'string',\n          description: 'The date and time the item was created.',\n          format: 'date-time'\n        },\n        modified: {\n          type: 'string',\n          description: 'The date and time the item was last modified.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'A short description of Calls app, not shown to end users.'\n        },\n        uid: {\n          type: 'string',\n          description: 'A Cloudflare-generated unique identifier for a item.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      app_id: {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a item.',
      },
      name: {
        type: 'string',
        description: 'A short description of Calls app, not shown to end users.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'app_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { app_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.calls.sfu.update(app_id, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
