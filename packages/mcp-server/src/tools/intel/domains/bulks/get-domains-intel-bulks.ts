// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.domains.bulks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/intel/domain/bulk',
  operationId: 'domain-intelligence-get-multiple-domain-details',
};

export const tool: Tool = {
  name: 'get_domains_intel_bulks',
  description: 'Same as summary.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      domain: {
        type: 'array',
        description: 'Accepts multiple values like `?domain=cloudflare.com&domain=example.com`.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.intel.domains.bulks.get(body);
};

export default { metadata, tool, handler };
