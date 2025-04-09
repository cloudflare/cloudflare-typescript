// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.certificate_packs.quota',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_certificate_packs_ssl_quota',
  description: 'For a given zone, list certificate pack quotas.',
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
  return client.ssl.certificatePacks.quota.get(body);
};

export default { metadata, tool, handler };
