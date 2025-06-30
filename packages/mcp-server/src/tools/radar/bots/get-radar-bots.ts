// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bots/{bot_slug}',
  operationId: 'radar-get-bot-details',
};

export const tool: Tool = {
  name: 'get_radar_bots',
  description: 'Retrieves the requested bot information.',
  inputSchema: {
    type: 'object',
    properties: {
      bot_slug: {
        type: 'string',
        description: 'Bot slug.',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bot_slug, ...body } = args as any;
  return asTextContentResult(await client.radar.bots.get(bot_slug, body));
};

export default { metadata, tool, handler };
