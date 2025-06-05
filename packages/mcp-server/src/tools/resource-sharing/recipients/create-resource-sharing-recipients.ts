// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing.recipients',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/shares/{share_id}/recipients',
  operationId: 'share-recipient-create',
};

export const tool: Tool = {
  name: 'create_resource_sharing_recipients',
  description: 'Create a new share recipient',
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
      organization_id: {
        type: 'string',
        description: 'Organization identifier.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { share_id, ...body } = args as any;
  return asTextContentResult(await client.resourceSharing.recipients.create(share_id, body));
};

export default { metadata, tool, handler };
