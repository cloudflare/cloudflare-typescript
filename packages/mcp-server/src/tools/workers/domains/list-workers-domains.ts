// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.domains',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/domains',
  operationId: 'worker-domain-list-domains',
};

export const tool: Tool = {
  name: 'list_workers_domains',
  description: 'Lists all Worker Domains for an account.',
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
      zone_name: {
        type: 'string',
        description: 'Name of the zone.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.workers.domains.list(body));
};

export default { metadata, tool, handler };
