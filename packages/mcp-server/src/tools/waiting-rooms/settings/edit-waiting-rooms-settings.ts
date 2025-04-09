// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.settings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_waiting_rooms_settings',
  description: 'Patch zone-level Waiting Room settings',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      search_engine_crawler_bypass: {
        type: 'boolean',
        description:
          'Whether to allow verified search engine crawlers to bypass all waiting rooms on this zone.\nVerified search engine crawlers will not be tracked or counted by the waiting room system,\nand will not appear in waiting room analytics.\n',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.waitingRooms.settings.edit(body);
};

export default { metadata, tool, handler };
