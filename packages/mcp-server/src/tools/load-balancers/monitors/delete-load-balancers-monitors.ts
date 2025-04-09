// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.monitors',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_load_balancers_monitors',
  description: 'Delete a configured monitor.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      monitor_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { monitor_id, ...body } = args;
  return client.loadBalancers.monitors.delete(monitor_id, body);
};

export default { metadata, tool, handler };
