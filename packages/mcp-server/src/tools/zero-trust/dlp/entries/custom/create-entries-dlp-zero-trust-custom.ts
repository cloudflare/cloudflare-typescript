// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.entries.custom',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/entries',
  operationId: 'dlp-entries-create-entry',
};

export const tool: Tool = {
  name: 'create_entries_dlp_zero_trust_custom',
  description: 'Creates a DLP custom entry.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      enabled: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      pattern: {
        $ref: '#/$defs/pattern',
      },
      profile_id: {
        type: 'string',
      },
    },
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.dlp.entries.custom.create(body));
};

export default { metadata, tool, handler };
