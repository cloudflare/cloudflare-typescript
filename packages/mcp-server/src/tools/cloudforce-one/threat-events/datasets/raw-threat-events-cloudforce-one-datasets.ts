// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.datasets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/raw/{dataset_id}/{event_id}',
  operationId: 'get_EventRawReadDS',
};

export const tool: Tool = {
  name: 'raw_threat_events_cloudforce_one_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReads data for a raw event\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string'\n    },\n    accountId: {\n      type: 'number'\n    },\n    created: {\n      type: 'string'\n    },\n    data: {\n      type: 'object'\n    },\n    source: {\n      type: 'string'\n    },\n    tlp: {\n      type: 'string'\n    }\n  },\n  required: [    'id',\n    'accountId',\n    'created',\n    'data',\n    'source',\n    'tlp'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      dataset_id: {
        type: 'string',
        description: 'Dataset ID.',
      },
      event_id: {
        type: 'string',
        description: 'Event ID.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'dataset_id', 'event_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { event_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.cloudforceOne.threatEvents.datasets.raw(event_id, body)),
  );
};

export default { metadata, tool, handler };
