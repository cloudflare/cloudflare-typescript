// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth.settings',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_origin_tls_client_auth_settings',
  description: 'Get whether zone-level authenticated origin pulls is enabled or not. It is false by default.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.originTLSClientAuth.settings.get(body);
};

export default { metadata, tool, handler };
