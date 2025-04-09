// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'quota_cloudforce_one_requests',
  description: 'Get Request Quota',
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
  return client.cloudforceOne.requests.quota(account_identifier);
};

export default { metadata, tool, handler };
