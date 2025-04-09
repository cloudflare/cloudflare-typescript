// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'bulk_create_cloudforce_one_threat_events',
  description:
    'The `datasetId` parameter must be defined. To list existing datasets (and their IDs) in your account, use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID',
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            attacker: {
              type: 'string',
            },
            attackerCountry: {
              type: 'string',
            },
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
              required: [],
            },
            tlp: {
              type: 'string',
            },
            accountId: {
              type: 'number',
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
          required: [
            'attacker',
            'attackerCountry',
            'category',
            'date',
            'event',
            'indicatorType',
            'raw',
            'tlp',
          ],
        },
      },
      datasetId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.cloudforceOne.threatEvents.bulkCreate(body);
};

export default { metadata, tool, handler };
