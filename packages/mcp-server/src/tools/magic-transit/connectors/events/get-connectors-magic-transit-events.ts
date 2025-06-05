// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors.events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/connectors/{connector_id}/telemetry/events/{event_t}.{event_n}',
  operationId: 'mconn-connector-telemetry-events-get',
};

export const tool: Tool = {
  name: 'get_connectors_magic_transit_events',
  description: 'Get Event',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
      },
      connector_id: {
        type: 'string',
      },
      event_t: {
        type: 'number',
      },
      event_n: {
        type: 'number',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { event_n, ...body } = args as any;
  return asTextContentResult(await client.magicTransit.connectors.events.get(event_n, body));
};

export default { metadata, tool, handler };
