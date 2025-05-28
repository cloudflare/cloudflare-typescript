// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.tags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/tags/{tag_name}',
  operationId: 'access-tags-get-a-tag',
};

export const tool: Tool = {
  name: 'get_access_zero_trust_tags',
  description: 'Get a tag',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { tag_name, ...body } = args as any;
  return client.zeroTrust.access.tags.get(tag_name, body);
};

export default { metadata, tool, handler };
