// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/events',
  operationId: 'get_EventListGet',
};

export const tool: Tool = {
  name: 'list_cloudforce_one_threat_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nWhen `datasetId` is unspecified, events will be listed from the `Cloudforce One Threat Events` dataset. To list existing datasets (and their IDs), use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint). Also, must provide query parameters.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      attacker: {\n        type: 'string'\n      },\n      attackerCountry: {\n        type: 'string'\n      },\n      category: {\n        type: 'string'\n      },\n      date: {\n        type: 'string'\n      },\n      event: {\n        type: 'string'\n      },\n      indicator: {\n        type: 'string'\n      },\n      indicatorType: {\n        type: 'string'\n      },\n      indicatorTypeId: {\n        type: 'number'\n      },\n      killChain: {\n        type: 'number'\n      },\n      mitreAttack: {\n        type: 'array',\n        items: {\n          type: 'string'\n        }\n      },\n      numReferenced: {\n        type: 'number'\n      },\n      numReferences: {\n        type: 'number'\n      },\n      rawId: {\n        type: 'string'\n      },\n      referenced: {\n        type: 'array',\n        items: {\n          type: 'string'\n        }\n      },\n      referencedIds: {\n        type: 'array',\n        items: {\n          type: 'number'\n        }\n      },\n      references: {\n        type: 'array',\n        items: {\n          type: 'string'\n        }\n      },\n      referencesIds: {\n        type: 'array',\n        items: {\n          type: 'number'\n        }\n      },\n      tags: {\n        type: 'array',\n        items: {\n          type: 'string'\n        }\n      },\n      targetCountry: {\n        type: 'string'\n      },\n      targetIndustry: {\n        type: 'string'\n      },\n      tlp: {\n        type: 'string'\n      },\n      uuid: {\n        type: 'string'\n      },\n      insight: {\n        type: 'string'\n      },\n      releasabilityId: {\n        type: 'string'\n      }\n    },\n    required: [      'attacker',\n      'attackerCountry',\n      'category',\n      'date',\n      'event',\n      'indicator',\n      'indicatorType',\n      'indicatorTypeId',\n      'killChain',\n      'mitreAttack',\n      'numReferenced',\n      'numReferences',\n      'rawId',\n      'referenced',\n      'referencedIds',\n      'references',\n      'referencesIds',\n      'tags',\n      'targetCountry',\n      'targetIndustry',\n      'tlp',\n      'uuid'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      datasetId: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      forceRefresh: {
        type: 'boolean',
      },
      order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      orderBy: {
        type: 'string',
      },
      page: {
        type: 'number',
      },
      pageSize: {
        type: 'number',
      },
      search: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            field: {
              type: 'string',
            },
            op: {
              type: 'string',
              enum: [
                'equals',
                'not',
                'gt',
                'gte',
                'lt',
                'lte',
                'like',
                'contains',
                'startsWith',
                'endsWith',
                'in',
                'find',
              ],
            },
            value: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'number',
                },
                {
                  type: 'array',
                  items: {
                    anyOf: [
                      {
                        type: 'string',
                      },
                      {
                        type: 'number',
                      },
                    ],
                  },
                },
              ],
            },
          },
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
    await maybeFilter(jq_filter, await client.cloudforceOne.threatEvents.list(body)),
  );
};

export default { metadata, tool, handler };
