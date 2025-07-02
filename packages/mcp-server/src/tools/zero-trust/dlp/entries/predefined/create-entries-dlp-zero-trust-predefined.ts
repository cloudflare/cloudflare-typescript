// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.entries.predefined',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/entries/predefined',
  operationId: 'dlp-entries-create-predefined-entry',
};

export const tool: Tool = {
  name: 'create_entries_dlp_zero_trust_predefined',
  description: 'This will update an existing predefined entry',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      enabled: {
        type: 'boolean',
      },
      entry_id: {
        type: 'string',
      },
      profile_id: {
        type: 'string',
        description:
          'This field is not actually used as the owning profile for a predefined entry is already set\nto a predefined profile',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.dlp.entries.predefined.create(body));
};

export default { metadata, tool, handler };
