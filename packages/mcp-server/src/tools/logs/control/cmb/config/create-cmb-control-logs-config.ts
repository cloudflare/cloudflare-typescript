// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logs.control.cmb.config',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_cmb_control_logs_config',
  description: 'Updates CMB config.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      regions: {
        type: 'string',
        description: 'Name of the region.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.logs.control.cmb.config.create(body);
};

export default { metadata, tool, handler };
