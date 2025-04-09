// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zaraz.history.configs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_history_zaraz_configs',
  description: 'Gets a history of published Zaraz configurations by ID(s) for a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      ids: {
        type: 'array',
        description: 'Comma separated list of Zaraz configuration IDs',
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zaraz.history.configs.get(body);
};

export default { metadata, tool, handler };
