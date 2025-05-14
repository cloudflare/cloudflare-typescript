// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'hyperdrive.configs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_hyperdrive_configs',
  description: 'Deletes the specified Hyperdrive.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Define configurations using a unique string identifier.',
      },
      hyperdrive_id: {
        type: 'string',
        description: 'Define configurations using a unique string identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { hyperdrive_id, ...body } = args as any;
  return client.hyperdrive.configs.delete(hyperdrive_id, body);
};

export default { metadata, tool, handler };
