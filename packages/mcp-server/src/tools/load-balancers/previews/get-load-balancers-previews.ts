// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.previews',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_load_balancers_previews',
  description: 'Get the result of a previous preview operation using the provided preview_id.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      preview_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { preview_id, ...body } = args;
  return client.loadBalancers.previews.get(preview_id, body);
};

export default { metadata, tool, handler };
