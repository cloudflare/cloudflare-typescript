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
  name: 'create_cloudforce_one_requests',
  description:
    'Creating a request adds the request into the Cloudforce One queue for analysis. In addition to the content, a short title, type, priority, and releasability should be provided. If one is not provided, a default will be assigned.',
  inputSchema: {
    type: 'object',
    properties: {
      account_identifier: {
        type: 'string',
        description: 'Identifier',
      },
      content: {
        type: 'string',
        description: 'Request content',
      },
      priority: {
        type: 'string',
        description: 'Priority for analyzing the request',
      },
      request_type: {
        type: 'string',
        description: 'Requested information from request',
      },
      summary: {
        type: 'string',
        description: 'Brief description of the request',
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
  return client.cloudforceOne.requests.create(account_identifier, body);
};

export default { metadata, tool, handler };
