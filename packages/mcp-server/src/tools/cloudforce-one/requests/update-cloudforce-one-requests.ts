// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_cloudforce_one_requests',
  description:
    'Updating a request alters the request in the Cloudforce One queue. This API may be used to update any attributes of the request after the initial submission. Only fields that you choose to update need to be add to the request body.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      request_id: {
        type: 'string',
        description: 'UUID.',
      },
      content: {
        type: 'string',
        description: 'Request content.',
      },
      priority: {
        type: 'string',
        description: 'Priority for analyzing the request.',
      },
      request_type: {
        type: 'string',
        description: 'Requested information from request.',
      },
      summary: {
        type: 'string',
        description: 'Brief description of the request.',
      },
      tlp: {
        type: 'string',
        title: 'TLP',
        description: 'The CISA defined Traffic Light Protocol (TLP).',
        enum: ['clear', 'amber', 'amber-strict', 'green', 'red'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { request_id, ...body } = args as any;
  return client.cloudforceOne.requests.update(request_id, body);
};

export default { metadata, tool, handler };
