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
        description: 'Identifier',
      },
      hyperdrive_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { hyperdrive_id, ...body } = args;
  return client.hyperdrive.configs.delete(hyperdrive_id, body);
};

export default { metadata, tool, handler };
