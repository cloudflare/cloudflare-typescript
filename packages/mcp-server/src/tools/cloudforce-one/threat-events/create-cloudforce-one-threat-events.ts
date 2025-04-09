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
  name: 'create_cloudforce_one_threat_events',
  description:
    'Events must be created in a client-specific dataset, which means the `datasetId` parameter must be defined. To create a dataset, see the [`Create Dataset`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/create/) endpoint.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID',
      },
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.cloudforceOne.threatEvents.create(body);
};

export default { metadata, tool, handler };
