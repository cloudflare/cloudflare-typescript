// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns_firewall.reverse_dns',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_dns_firewall_reverse_dns',
  description: 'Update reverse DNS configuration (PTR records) for a DNS Firewall cluster',
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
      ptr: {
        type: 'object',
        description: 'Map of cluster IP addresses to PTR record contents',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { dns_firewall_id, ...body } = args;
  return client.dnsFirewall.reverseDNS.edit(dns_firewall_id, body);
};

export default { metadata, tool, handler };
