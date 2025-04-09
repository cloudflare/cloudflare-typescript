// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.domain_history',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_intel_domain_history',
  description:
    'Gets historical security threat and content categories currently and previously assigned to a domain.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      domain: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.intel.domainHistory.get(body);
};

export default { metadata, tool, handler };
