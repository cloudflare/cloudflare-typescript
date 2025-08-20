// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.entries',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/dlp/entries/{entry_id}',
  operationId: 'dlp-entries-update-entry',
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
            $ref: '#/$defs/pattern',
          },
          type: {
            type: 'string',
            enum: ['custom'],
          },
          enabled: {
            type: 'boolean',
          },
        },
        required: ['account_id', 'entry_id', 'name', 'pattern', 'type'],
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
        required: ['account_id', 'entry_id', 'type'],
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
        required: ['account_id', 'entry_id', 'type'],
      },
    ],
    $defs: {
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
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { entry_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.dlp.entries.update(entry_id, body));
};

export default { metadata, tool, handler };
