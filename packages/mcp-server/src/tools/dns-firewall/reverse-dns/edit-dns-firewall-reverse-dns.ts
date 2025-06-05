// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns_firewall.reverse_dns',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/dns_firewall/{dns_firewall_id}/reverse_dns',
  operationId: 'dns-firewall-update-dns-firewall-cluster-reverse-dns',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { dns_firewall_id, ...body } = args as any;
  return asTextContentResult(await client.dnsFirewall.reverseDNS.edit(dns_firewall_id, body));
};

export default { metadata, tool, handler };
