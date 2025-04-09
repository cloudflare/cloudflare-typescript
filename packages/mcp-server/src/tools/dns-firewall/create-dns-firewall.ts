// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns_firewall',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_dns_firewall',
  description: 'Create a DNS Firewall cluster',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      name: {
        type: 'string',
        description: 'DNS Firewall cluster name',
      },
      upstream_ips: {
        type: 'array',
        items: {
          type: 'string',
          description: 'Upstream DNS Server IPv4 address',
        },
      },
      attack_mitigation: {
        type: 'object',
        description: 'Attack mitigation settings',
        properties: {
          enabled: {
            type: 'boolean',
            description:
              'When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers',
          },
          only_when_upstream_unhealthy: {
            type: 'boolean',
            description: 'Only mitigate attacks when upstream servers seem unhealthy',
          },
        },
        required: [],
      },
      deprecate_any_requests: {
        type: 'boolean',
        description: 'Whether to refuse to answer queries for the ANY type',
      },
      ecs_fallback: {
        type: 'boolean',
        description: 'Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent',
      },
      maximum_cache_ttl: {
        type: 'number',
        description:
          'Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. Higher TTLs will be decreased to the maximum defined here for caching purposes.',
      },
      minimum_cache_ttl: {
        type: 'number',
        description:
          'Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. Lower TTLs will be increased to the minimum defined here for caching purposes.',
      },
      negative_cache_ttl: {
        type: 'number',
        description:
          'Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers.',
      },
      ratelimit: {
        type: 'number',
        description:
          'Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster)',
      },
      retries: {
        type: 'number',
        description:
          'Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dnsFirewall.create(body);
};

export default { metadata, tool, handler };
