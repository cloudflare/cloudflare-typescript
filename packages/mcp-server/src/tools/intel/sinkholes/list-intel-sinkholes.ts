// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.sinkholes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_intel_sinkholes',
  description: 'List sinkholes owned by this account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.intel.sinkholes.list(body);
};

export default { metadata, tool, handler };
