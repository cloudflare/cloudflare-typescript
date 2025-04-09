// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_normalization',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_url_normalization',
  description: 'Updates the URL Normalization settings.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'ID',
        description: 'The unique ID of the zone.',
      },
      scope: {
        type: 'string',
        title: 'Scope',
        description: 'The scope of the URL normalization.',
        enum: ['incoming', 'both'],
      },
      type: {
        type: 'string',
        title: 'Type',
        description: 'The type of URL normalization performed by Cloudflare.',
        enum: ['cloudflare', 'rfc3986'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.urlNormalization.update(body);
};

export default { metadata, tool, handler };
