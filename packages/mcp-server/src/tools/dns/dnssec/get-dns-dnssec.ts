// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.dnssec',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_dns_dnssec',
  description: 'Details about DNSSEC status and configuration.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dns.dnssec.get(body);
};

export default { metadata, tool, handler };
