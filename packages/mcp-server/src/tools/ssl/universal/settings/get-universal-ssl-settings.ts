// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.universal.settings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/ssl/universal/settings',
  operationId: 'universal-ssl-settings-for-a-zone-universal-ssl-settings-details',
};

export const tool: Tool = {
  name: 'get_universal_ssl_settings',
  description: 'Get Universal SSL Settings for a Zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.ssl.universal.settings.get(body);
};

export default { metadata, tool, handler };
