// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.target_industries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/targetIndustries',
  operationId: 'get_TargetIndustryList',
};

export const tool: Tool = {
  name: 'list_threat_events_cloudforce_one_target_industries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists target industries across multiple datasets\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'object',\n      properties: {\n        type: {\n          type: 'string'\n        }\n      },\n      required: [        'type'\n      ]\n    },\n    type: {\n      type: 'string'\n    }\n  },\n  required: [    'items',\n    'type'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      datasetIds: {
        type: 'array',
        description:
          'Array of dataset IDs to query target industries from. If not provided, uses the default dataset.',
        items: {
          type: 'string',
        },
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.cloudforceOne.threatEvents.targetIndustries.list(body)),
  );
};

export default { metadata, tool, handler };
