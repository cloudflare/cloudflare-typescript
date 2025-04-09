// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.entries',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_dlp_zero_trust_entries',
  description: 'Updates a DLP entry.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          entry_id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          pattern: {
            type: 'object',
            properties: {
              regex: {
                type: 'string',
              },
              validation: {
                type: 'string',
                enum: ['luhn'],
              },
            },
            required: ['regex'],
          },
          type: {
            type: 'string',
            enum: ['custom'],
          },
          enabled: {
            type: 'boolean',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          entry_id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['predefined'],
          },
          enabled: {
            type: 'boolean',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          entry_id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['integration'],
          },
          enabled: {
            type: 'boolean',
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { entry_id, ...body } = args;
  return client.zeroTrust.dlp.entries.update(entry_id, body);
};

export default { metadata, tool, handler };
