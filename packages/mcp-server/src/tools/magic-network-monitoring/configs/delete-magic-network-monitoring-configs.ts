// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_network_monitoring.configs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/mnm/config',
  operationId: 'magic-network-monitoring-configuration-delete-account-configuration',
};

export const tool: Tool = {
  name: 'delete_magic_network_monitoring_configs',
  description: 'Delete an existing network monitoring configuration.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.magicNetworkMonitoring.configs.delete(body);
};

export default { metadata, tool, handler };
