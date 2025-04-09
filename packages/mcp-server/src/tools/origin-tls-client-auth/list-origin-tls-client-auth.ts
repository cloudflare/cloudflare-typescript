// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_origin_tls_client_auth',
  description: 'List Certificates',
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
  return client.originTLSClientAuth.list(body);
};

export default { metadata, tool, handler };
