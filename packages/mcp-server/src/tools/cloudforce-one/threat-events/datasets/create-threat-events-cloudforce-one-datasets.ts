// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/dataset/create',
  operationId: 'post_DatasetCreate',
};

export const tool: Tool = {
  name: 'create_threat_events_cloudforce_one_datasets',
  description: 'Creates a dataset',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      isPublic: {
        type: 'boolean',
        description:
          'If true, then anyone can search the dataset. If false, then its limited to the account.',
      },
      name: {
        type: 'string',
        description: 'Used to describe the dataset within the account context.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.cloudforceOne.threatEvents.datasets.create(body));
};

export default { metadata, tool, handler };
