// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.entries.predefined',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/dlp/entries/predefined/{entry_id}',
  operationId: 'dlp-entries-delete-predefined-entry',
};

export const tool: Tool = {
  name: 'delete_entries_dlp_zero_trust_predefined',
  description:
    "This is a no-op as predefined entires can't be deleted but is needed for our generated terraform API",
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
  return asTextContentResult(
    (await client.zeroTrust.dlp.entries.predefined.delete(entry_id, body)) as object,
  );
};

export default { metadata, tool, handler };
