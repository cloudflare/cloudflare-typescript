// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.domains',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/workers/domains/{domain_id}',
  operationId: 'worker-domain-detach-from-domain',
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
    required: ['account_id', 'domain_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { domain_id, ...body } = args as any;
  const response = await client.workers.domains.delete(domain_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
