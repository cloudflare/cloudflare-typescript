// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/create/bulk',
  operationId: 'post_EventCreateBulk',
};

export const tool: Tool = {
  name: 'bulk_create_cloudforce_one_threat_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe `datasetId` parameter must be defined. To list existing datasets (and their IDs) in your account, use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint.\n\n# Response Schema\n```json\n{\n  type: 'number',\n  description: 'Number of created bulk events'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            category: {
              type: 'string',
            },
            date: {
              type: 'string',
              format: 'date-time',
            },
            event: {
              type: 'string',
            },
            indicatorType: {
              type: 'string',
            },
            raw: {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                },
                source: {
                  type: 'string',
                },
                tlp: {
                  type: 'string',
                },
              },
              required: ['data'],
            },
            tlp: {
              type: 'string',
            },
            accountId: {
              type: 'number',
            },
            attacker: {
              type: 'string',
            },
            attackerCountry: {
              type: 'string',
            },
            datasetId: {
              type: 'string',
            },
            indicator: {
              type: 'string',
            },
            tags: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            targetCountry: {
              type: 'string',
            },
            targetIndustry: {
              type: 'string',
            },
          },
          required: ['category', 'date', 'event', 'indicatorType', 'raw', 'tlp'],
        },
      },
      datasetId: {
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
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.cloudforceOne.threatEvents.bulkCreate(body)),
  );
};

export default { metadata, tool, handler };
