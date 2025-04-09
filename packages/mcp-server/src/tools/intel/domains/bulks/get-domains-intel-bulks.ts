// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.domains.bulks',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_domains_intel_bulks',
  description: 'Same as summary',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      domain: {
        type: 'object',
        description: 'Accepts multiple values, i.e. `?domain=cloudflare.com&domain=example.com`.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.intel.domains.bulks.get(body);
};

export default { metadata, tool, handler };
