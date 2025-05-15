// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors.snapshots.latest',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_snapshots_connectors_magic_transit_latest',
  description: 'Get latest Snapshots',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
      },
      connector_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { connector_id, ...body } = args as any;
  return client.magicTransit.connectors.snapshots.latest.list(connector_id, body);
};

export default { metadata, tool, handler };
