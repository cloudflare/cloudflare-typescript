// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.seats',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_zero_trust_seats',
  description:
    'Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat` are set to false.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            access_seat: {
              type: 'boolean',
              description: 'True if the seat is part of Access.',
            },
            gateway_seat: {
              type: 'boolean',
              description: 'True if the seat is part of Gateway.',
            },
            seat_uid: {
              type: 'string',
              description: 'The unique API identifier for the Zero Trust seat.',
            },
          },
          required: ['access_seat', 'gateway_seat', 'seat_uid'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.seats.edit(body);
};

export default { metadata, tool, handler };
