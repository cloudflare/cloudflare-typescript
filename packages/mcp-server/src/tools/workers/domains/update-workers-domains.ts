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
  name: 'update_workers_domains',
  description: 'Attaches a Worker to a zone and hostname.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifer of the account.',
      },
      environment: {
        type: 'string',
        description: 'Worker environment associated with the zone and hostname.',
      },
      hostname: {
        type: 'string',
        description: 'Hostname of the Worker Domain.',
      },
      service: {
        type: 'string',
        description: 'Worker service associated with the zone and hostname.',
      },
      zone_id: {
        type: 'string',
        description: 'Identifier of the zone.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.workers.domains.update(body);
};

export default { metadata, tool, handler };
