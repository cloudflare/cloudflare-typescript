// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors.events.latest',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/connectors/{connector_id}/telemetry/events/latest',
  operationId: 'mconn-connector-telemetry-events-listLatest',
};

export const tool: Tool = {
  name: 'list_events_connectors_magic_transit_latest',
  description: 'Get latest Events',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      connector_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { connector_id, ...body } = args as any;
  return asTextContentResult(await client.magicTransit.connectors.events.latest.list(connector_id, body));
};

export default { metadata, tool, handler };
