// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'acm.total_tls',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_acm_total_tls',
  description: 'Get Total TLS Settings for a Zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.acm.totalTLS.get(body);
};

export default { metadata, tool, handler };
