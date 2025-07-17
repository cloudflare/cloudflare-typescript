// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'calls.turn',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/calls/turn_keys',
  operationId: 'calls-turn-key-create',
};

export const tool: Tool = {
  name: 'create_calls_turn',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new Cloudflare Calls TURN key.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    created: {\n      type: 'string',\n      description: 'The date and time the item was created.',\n      format: 'date-time'\n    },\n    key: {\n      type: 'string',\n      description: 'Bearer token'\n    },\n    modified: {\n      type: 'string',\n      description: 'The date and time the item was last modified.',\n      format: 'date-time'\n    },\n    name: {\n      type: 'string',\n      description: 'A short description of a TURN key, not shown to end users.'\n    },\n    uid: {\n      type: 'string',\n      description: 'A Cloudflare-generated unique identifier for a item.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      name: {
        type: 'string',
        description: 'A short description of a TURN key, not shown to end users.',
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.calls.turn.create(body)));
};

export default { metadata, tool, handler };
