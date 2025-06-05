// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing.recipients',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}',
  operationId: 'share-recipient-delete',
};

export const tool: Tool = {
  name: 'delete_resource_sharing_recipients',
  description:
    'Deletion is not immediate, an updated share recipient object with a new status will be returned.',
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
      recipient_id: {
        type: 'string',
        description: 'Share Recipient identifier tag.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { recipient_id, ...body } = args as any;
  return asTextContentResult(await client.resourceSharing.recipients.delete(recipient_id, body));
};

export default { metadata, tool, handler };
