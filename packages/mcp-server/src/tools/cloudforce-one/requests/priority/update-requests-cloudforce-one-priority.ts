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
  name: 'update_requests_cloudforce_one_priority',
  description: 'Update a Priority Intelligence Requirement',
  inputSchema: {
    type: 'object',
    properties: {
      account_identifier: {
        type: 'string',
        description: 'Identifier',
      },
      priority_identifer: {
        type: 'string',
        description: 'UUID',
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
  const { priority_identifer, ...body } = args;
  return client.cloudforceOne.requests.priority.update(priority_identifer, body);
};

export default { metadata, tool, handler };
