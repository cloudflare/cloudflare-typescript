// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.priority',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'quota_requests_cloudforce_one_priority',
  description: 'Get Priority Intelligence Requirement Quota',
  inputSchema: {
    type: 'object',
    properties: {
      account_identifier: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { account_identifier } = args;
  return client.cloudforceOne.requests.priority.quota(account_identifier);
};

export default { metadata, tool, handler };
