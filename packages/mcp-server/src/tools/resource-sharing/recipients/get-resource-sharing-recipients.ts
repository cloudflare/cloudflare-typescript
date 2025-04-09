// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing.recipients',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_resource_sharing_recipients',
  description: 'Get share recipient by ID.',
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

export const handler = (client: Cloudflare, args: any) => {
  const { recipient_id, ...body } = args;
  return client.resourceSharing.recipients.get(recipient_id, body);
};

export default { metadata, tool, handler };
