// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'bot_management',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_bot_management',
  description: "Retrieve a zone's Bot Management Config",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.botManagement.get(body);
};

export default { metadata, tool, handler };
