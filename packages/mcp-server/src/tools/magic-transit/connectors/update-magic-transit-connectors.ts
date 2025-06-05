// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/magic/connectors/{connector_id}',
  operationId: 'mconn-connector-replace',
};

export const tool: Tool = {
  name: 'update_magic_transit_connectors',
  description: 'Replace Connector',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      connector_id: {
        type: 'string',
      },
      activated: {
        type: 'boolean',
      },
      interrupt_window_duration_hours: {
        type: 'number',
      },
      interrupt_window_hour_of_day: {
        type: 'number',
      },
      notes: {
        type: 'string',
      },
      timezone: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { connector_id, ...body } = args as any;
  return asTextContentResult(await client.magicTransit.connectors.update(connector_id, body));
};

export default { metadata, tool, handler };
