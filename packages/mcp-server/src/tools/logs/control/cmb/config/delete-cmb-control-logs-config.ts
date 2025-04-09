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
  name: 'delete_cmb_control_logs_config',
  description: 'Deletes CMB config.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.logs.control.cmb.config.delete(body);
};

export default { metadata, tool, handler };
