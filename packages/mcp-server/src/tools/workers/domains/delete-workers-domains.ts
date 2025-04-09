// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.domains',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_workers_domains',
  description: 'Detaches a Worker from a zone and hostname.',
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
  return client.workers.domains.delete(domain_id, body);
};

export default { metadata, tool, handler };
