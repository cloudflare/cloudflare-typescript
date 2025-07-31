// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.categories',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/categories/{category_id}',
  operationId: 'patch_CategoryUpdate',
};

export const tool: Tool = {
  name: 'edit_threat_events_cloudforce_one_categories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a category\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    killChain: {\n      type: 'number'\n    },\n    name: {\n      type: 'string'\n    },\n    uuid: {\n      type: 'string'\n    },\n    mitreAttack: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    shortname: {\n      type: 'string'\n    }\n  },\n  required: [    'killChain',\n    'name',\n    'uuid'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      category_id: {
        type: 'string',
        description: 'Category UUID.',
      },
      killChain: {
        type: 'number',
      },
      mitreAttack: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      name: {
        type: 'string',
      },
      shortname: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'category_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { category_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.cloudforceOne.threatEvents.categories.edit(category_id, body)),
  );
};

export default { metadata, tool, handler };
