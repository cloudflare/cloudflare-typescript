// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'hostnames.settings.tls',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_settings_hostnames_tls',
  description: 'Delete the tls setting value for the hostname.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      setting_id: {
        type: 'string',
        description: 'The TLS Setting name.',
        enum: ['ciphers', 'min_tls_version', 'http2'],
      },
      hostname: {
        type: 'string',
        description: 'The hostname for which the tls settings are set.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { hostname, ...body } = args;
  return client.hostnames.settings.tls.delete(hostname, body);
};

export default { metadata, tool, handler };
