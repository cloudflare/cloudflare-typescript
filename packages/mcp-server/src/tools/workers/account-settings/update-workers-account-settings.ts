// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.account_settings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_workers_account_settings',
  description: 'Creates Worker account settings for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      default_usage_model: {
        type: 'string',
      },
      green_compute: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.workers.accountSettings.update(body);
};

export default { metadata, tool, handler };
