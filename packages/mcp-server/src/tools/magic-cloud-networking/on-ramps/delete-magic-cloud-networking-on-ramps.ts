// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.on_ramps',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/magic/cloud/onramps/{onramp_id}',
  operationId: 'onramps-delete',
};

export const tool: Tool = {
  name: 'delete_magic_cloud_networking_on_ramps',
  description: 'Delete an On-ramp (Closed Beta).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      onramp_id: {
        type: 'string',
      },
      destroy: {
        type: 'boolean',
      },
      force: {
        type: 'boolean',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { onramp_id, ...body } = args as any;
  return asTextContentResult(await client.magicCloudNetworking.onRamps.delete(onramp_id, body));
};

export default { metadata, tool, handler };
