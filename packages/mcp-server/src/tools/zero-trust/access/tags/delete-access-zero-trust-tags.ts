// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.tags',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_access_zero_trust_tags',
  description: 'Delete a tag',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      tag_name: {
        type: 'string',
        description: 'The name of the tag',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { tag_name, ...body } = args;
  return client.zeroTrust.access.tags.delete(tag_name, body);
};

export default { metadata, tool, handler };
