// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.settings',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_zones_settings',
  description: 'Fetch a single zone setting by name',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      setting_id: {
        type: 'string',
        description: 'Setting name',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { setting_id, ...body } = args;
  return client.zones.settings.get(setting_id, body);
};

export default { metadata, tool, handler };
