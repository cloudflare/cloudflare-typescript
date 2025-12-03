// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.entries.integration',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dlp/entries/{entry_id}',
  operationId: 'dlp-entries-get-dlp-entry',
};

export const tool: Tool = {
  name: 'get_entries_dlp_zero_trust_integration',
  description: 'Fetches a DLP entry by ID.',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { entry_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.dlp.entries.integration.get(entry_id, body));
};

export default { metadata, tool, handler };
