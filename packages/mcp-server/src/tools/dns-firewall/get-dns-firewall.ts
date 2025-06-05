// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns_firewall',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dns_firewall/{dns_firewall_id}',
  operationId: 'dns-firewall-dns-firewall-cluster-details',
};

export const tool: Tool = {
  name: 'get_dns_firewall',
  description: 'Show a single DNS Firewall cluster for an account',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { dns_firewall_id, ...body } = args as any;
  return asTextContentResult(await client.dnsFirewall.get(dns_firewall_id, body));
};

export default { metadata, tool, handler };
