// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_network_monitoring.configs.full',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/mnm/config/full',
  operationId: 'magic-network-monitoring-configuration-list-rules-and-account-configuration',
};

export const tool: Tool = {
  name: 'get_configs_magic_network_monitoring_full',
  description: 'Lists default sampling, router IPs, warp devices, and rules for account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.magicNetworkMonitoring.configs.full.get(body));
};

export default { metadata, tool, handler };
