// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.custom_nameservers',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_zones_custom_nameservers',
  description:
    'Get metadata for account-level custom nameservers on a zone.\n\nDeprecated in favor of [Show DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-a-zone-list-dns-settings).\n',
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
  return client.zones.customNameservers.get(body);
};

export default { metadata, tool, handler };
