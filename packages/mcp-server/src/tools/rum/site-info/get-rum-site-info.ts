// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rum.site_info',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_rum_site_info',
  description: 'Retrieves a Web Analytics site.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      site_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { site_id, ...body } = args;
  return client.rum.siteInfo.get(site_id, body);
};

export default { metadata, tool, handler };
