// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/connectors',
  operationId: 'mconn-connector-create',
};

export const tool: Tool = {
  name: 'create_magic_transit_connectors',
  description: 'Add a connector to your account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier',
      },
      device: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          serial_number: {
            type: 'string',
          },
        },
        required: [],
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
  const body = args as any;
  return asTextContentResult(await client.magicTransit.connectors.create(body));
};

export default { metadata, tool, handler };
