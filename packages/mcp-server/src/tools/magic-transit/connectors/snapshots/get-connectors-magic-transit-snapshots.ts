// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors.snapshots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/connectors/{connector_id}/telemetry/snapshots/{snapshot_t}',
  operationId: 'mconn-connector-telemetry-snapshots-get',
};

export const tool: Tool = {
  name: 'get_connectors_magic_transit_snapshots',
  description: 'Get Snapshot',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
      },
      connector_id: {
        type: 'string',
      },
      snapshot_t: {
        type: 'number',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { snapshot_t, ...body } = args as any;
  return client.magicTransit.connectors.snapshots.get(snapshot_t, body);
};

export default { metadata, tool, handler };
