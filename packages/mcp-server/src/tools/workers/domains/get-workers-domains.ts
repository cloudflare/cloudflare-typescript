// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.domains',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_workers_domains',
  description: 'Gets a Worker domain.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifer of the account.',
      },
      domain_id: {
        type: 'string',
        description: 'Identifer of the Worker Domain.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { domain_id, ...body } = args;
  return client.workers.domains.get(domain_id, body);
};

export default { metadata, tool, handler };
