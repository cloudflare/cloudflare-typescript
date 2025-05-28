// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/shares/{share_id}',
  operationId: 'share-delete',
};

export const tool: Tool = {
  name: 'delete_resource_sharing',
  description: 'Deletion is not immediate, an updated share object with a new status will be returned.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { share_id, ...body } = args as any;
  return client.resourceSharing.delete(share_id, body);
};

export default { metadata, tool, handler };
