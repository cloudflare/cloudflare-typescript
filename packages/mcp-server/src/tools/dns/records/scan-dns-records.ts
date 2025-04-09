// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.records',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'scan_dns_records',
  description:
    "Scan for common DNS records on your domain and automatically add them to your zone. Useful if you haven't updated your nameservers yet.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dns.records.scan(body);
};

export default { metadata, tool, handler };
