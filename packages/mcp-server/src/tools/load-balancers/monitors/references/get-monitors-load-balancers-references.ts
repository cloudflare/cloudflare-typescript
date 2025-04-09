// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.monitors.references',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_monitors_load_balancers_references',
  description: 'Get the list of resources that reference the provided monitor.',
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
  return client.loadBalancers.monitors.references.get(monitor_id, body);
};

export default { metadata, tool, handler };
