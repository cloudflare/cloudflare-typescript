// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.custom_nameservers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_zones_custom_nameservers',
  description:
    'Set metadata for account-level custom nameservers on a zone.\n\nIf you would like new zones in the account to use account custom nameservers by default, use PUT /accounts/:identifier to set the account setting use_account_custom_ns_by_default to true.\n\nDeprecated in favor of [Update DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-a-zone-update-dns-settings).\n',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      enabled: {
        type: 'boolean',
        description: 'Whether zone uses account-level custom nameservers.',
      },
      ns_set: {
        type: 'number',
        description: 'The number of the name server set to assign to the zone.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zones.customNameservers.update(body);
};

export default { metadata, tool, handler };
