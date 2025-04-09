// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors.events',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_connectors_magic_transit_events',
  description: 'List Events',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
      },
      connector_id: {
        type: 'string',
      },
      from: {
        type: 'number',
      },
      to: {
        type: 'number',
      },
      cursor: {
        type: 'string',
      },
      limit: {
        type: 'number',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { connector_id, ...body } = args;
  return client.magicTransit.connectors.events.list(connector_id, body);
};

export default { metadata, tool, handler };
