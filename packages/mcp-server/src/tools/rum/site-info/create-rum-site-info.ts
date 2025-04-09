// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rum.site_info',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_rum_site_info',
  description: 'Creates a new Web Analytics site.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      auto_install: {
        type: 'boolean',
        description: 'If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.',
      },
      host: {
        type: 'string',
        description: 'The hostname to use for gray-clouded sites.',
      },
      zone_tag: {
        type: 'string',
        description: 'The zone identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.rum.siteInfo.create(body);
};

export default { metadata, tool, handler };
