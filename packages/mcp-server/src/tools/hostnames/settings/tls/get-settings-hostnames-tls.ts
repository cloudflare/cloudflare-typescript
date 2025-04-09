// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'hostnames.settings.tls',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_settings_hostnames_tls',
  description: 'List the requested TLS setting for the hostnames under this zone.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { setting_id, ...body } = args;
  return client.hostnames.settings.tls.get(setting_id, body);
};

export default { metadata, tool, handler };
