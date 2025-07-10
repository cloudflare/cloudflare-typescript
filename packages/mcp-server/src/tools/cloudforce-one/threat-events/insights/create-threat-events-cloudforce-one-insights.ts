// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.insights',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/{event_id}/insight/create',
  operationId: 'post_EventInsightCreate',
};

export const tool: Tool = {
  name: 'create_threat_events_cloudforce_one_insights',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdds an insight to an event\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        content: {\n          type: 'string'\n        },\n        uuid: {\n          type: 'string'\n        }\n      },\n      required: [        'content',\n        'uuid'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      event_id: {
        type: 'string',
        description: 'Event UUID.',
      },
      content: {
        type: 'string',
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
  const { event_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.cloudforceOne.threatEvents.insights.create(event_id, body)),
  );
};

export default { metadata, tool, handler };
