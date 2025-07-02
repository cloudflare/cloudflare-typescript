// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.entries.integration',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/dlp/entries/integration/{entry_id}',
  operationId: 'dlp-entries-delete-integration-entry',
};

export const tool: Tool = {
  name: 'delete_entries_dlp_zero_trust_integration',
  description:
    "This is a no-op as integration entires can't be deleted but is needed for our generated terraform API",
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { entry_id, ...body } = args as any;
  return asTextContentResult(
    (await client.zeroTrust.dlp.entries.integration.delete(entry_id, body)) as object,
  );
};

export default { metadata, tool, handler };
