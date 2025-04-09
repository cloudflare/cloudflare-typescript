// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns_firewall.reverse_dns',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_dns_firewall_reverse_dns',
  description: 'Show reverse DNS configuration (PTR records) for a DNS Firewall cluster',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      dns_firewall_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { dns_firewall_id, ...body } = args;
  return client.dnsFirewall.reverseDNS.get(dns_firewall_id, body);
};

export default { metadata, tool, handler };
