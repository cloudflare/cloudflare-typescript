// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.connections',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_page_shield_connections',
  description: 'Fetches a connection detected by Page Shield by connection ID.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      connection_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { connection_id, ...body } = args;
  return client.pageShield.connections.get(connection_id, body);
};

export default { metadata, tool, handler };
