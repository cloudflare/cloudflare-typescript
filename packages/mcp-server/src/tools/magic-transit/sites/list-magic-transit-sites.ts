// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_magic_transit_sites',
  description:
    'Lists Sites associated with an account. Use connectorid query param to return sites where connectorid matches either site.ConnectorID or site.SecondaryConnectorID.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      connectorid: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicTransit.sites.list(body);
};

export default { metadata, tool, handler };
