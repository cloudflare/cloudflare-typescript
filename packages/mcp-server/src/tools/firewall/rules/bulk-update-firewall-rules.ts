// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/firewall/rules',
  operationId: 'firewall-rules-update-firewall-rules',
};

export const tool: Tool = {
  name: 'bulk_update_firewall_rules',
  description: 'Updates one or more existing firewall rules.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.firewall.rules.bulkUpdate(body);
};

export default { metadata, tool, handler };
