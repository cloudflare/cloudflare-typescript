// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.entries.custom',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/dlp/entries/{entry_id}',
  operationId: 'dlp-entries-delete-entry',
};

export const tool: Tool = {
  name: 'delete_entries_dlp_zero_trust_custom',
  description: 'Deletes a DLP custom entry.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      entry_id: {
        type: 'string',
      },
    },
    required: ['account_id', 'entry_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { entry_id, ...body } = args as any;
  return asTextContentResult((await client.zeroTrust.dlp.entries.custom.delete(entry_id, body)) as object);
};

export default { metadata, tool, handler };
