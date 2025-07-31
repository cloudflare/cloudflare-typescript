// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'hyperdrive.configs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}',
  operationId: 'delete-hyperdrive',
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
    required: ['account_id', 'hyperdrive_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { hyperdrive_id, ...body } = args as any;
  return asTextContentResult((await client.hyperdrive.configs.delete(hyperdrive_id, body)) as object);
};

export default { metadata, tool, handler };
