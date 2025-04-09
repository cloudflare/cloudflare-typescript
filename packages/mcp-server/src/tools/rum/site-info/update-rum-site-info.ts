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
  name: 'update_rum_site_info',
  description: 'Updates an existing Web Analytics site.',
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
      auto_install: {
        type: 'boolean',
        description: 'If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.',
      },
      enabled: {
        type: 'boolean',
        description:
          'Enables or disables RUM. This option can be used only when auto_install is set to true.',
      },
      host: {
        type: 'string',
        description: 'The hostname to use for gray-clouded sites.',
      },
      lite: {
        type: 'boolean',
        description: 'If enabled, the JavaScript snippet will not be injected for visitors from the EU.',
      },
      zone_tag: {
        type: 'string',
        description: 'The zone identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { site_id, ...body } = args;
  return client.rum.siteInfo.update(site_id, body);
};

export default { metadata, tool, handler };
