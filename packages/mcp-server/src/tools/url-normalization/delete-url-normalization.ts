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
  name: 'delete_url_normalization',
  description: 'Deletes the URL Normalization settings.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'ID',
        description: 'The unique ID of the zone.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.urlNormalization.delete(body);
};

export default { metadata, tool, handler };
