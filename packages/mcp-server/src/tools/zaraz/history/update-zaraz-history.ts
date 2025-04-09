// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zaraz.history',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_zaraz_history',
  description: 'Restores a historical published Zaraz configuration by ID for a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      body: {
        type: 'integer',
        description: 'ID of the Zaraz configuration to restore.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zaraz.history.update(body);
};

export default { metadata, tool, handler };
