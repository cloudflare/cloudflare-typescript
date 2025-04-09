// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.priority',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_requests_cloudforce_one_priority',
  description: 'Create a New Priority Intelligence Requirement',
  inputSchema: {
    type: 'object',
    properties: {
      account_identifier: {
        type: 'string',
        description: 'Identifier',
      },
      labels: {
        type: 'array',
        title: 'Labels',
        description: 'List of labels',
        items: {
          type: 'string',
        },
      },
      priority: {
        type: 'integer',
        description: 'Priority',
      },
      requirement: {
        type: 'string',
        description: 'Requirement',
      },
      tlp: {
        type: 'string',
        title: 'TLP',
        description: 'The CISA defined Traffic Light Protocol (TLP)',
        enum: ['clear', 'amber', 'amber-strict', 'green', 'red'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { account_identifier, ...body } = args;
  return client.cloudforceOne.requests.priority.create(account_identifier, body);
};

export default { metadata, tool, handler };
