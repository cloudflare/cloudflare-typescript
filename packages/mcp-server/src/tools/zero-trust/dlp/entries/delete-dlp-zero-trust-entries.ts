// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.entries',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/dlp/entries/{entry_id}',
  operationId: 'dlp-entries-delete-entry',
};

export const tool: Tool = {
  name: 'delete_dlp_zero_trust_entries',
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
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { entry_id, ...body } = args as any;
  return client.zeroTrust.dlp.entries.delete(entry_id, body);
};

export default { metadata, tool, handler };
