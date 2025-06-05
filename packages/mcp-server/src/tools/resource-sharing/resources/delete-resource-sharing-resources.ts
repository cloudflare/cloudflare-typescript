// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing.resources',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/shares/{share_id}/resources/{resource_id}',
  operationId: 'share-resource-delete',
};

export const tool: Tool = {
  name: 'delete_resource_sharing_resources',
  description:
    'Deletion is not immediate, an updated share resource object with a new status will be returned.',
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
      resource_id: {
        type: 'string',
        description: 'Share Resource identifier.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { resource_id, ...body } = args as any;
  return asTextContentResult(await client.resourceSharing.resources.delete(resource_id, body));
};

export default { metadata, tool, handler };
