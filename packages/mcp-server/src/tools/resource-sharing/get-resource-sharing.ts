// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/shares/{share_id}',
  operationId: 'shares-get-by-id',
};

export const tool: Tool = {
  name: 'get_resource_sharing',
  description: 'Fetches share by ID.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier.',
      },
      share_id: {
        type: 'string',
        description: 'Share identifier tag.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { share_id, ...body } = args as any;
  return asTextContentResult(await client.resourceSharing.get(share_id, body));
};

export default { metadata, tool, handler };
