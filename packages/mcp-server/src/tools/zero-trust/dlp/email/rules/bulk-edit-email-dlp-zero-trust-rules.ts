// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.email.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/dlp/email/rules',
  operationId: 'dlp-email-scanner-update-rule-priorities',
};

export const tool: Tool = {
  name: 'bulk_edit_email_dlp_zero_trust_rules',
  description: 'Update email scanner rule priorities',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      new_priorities: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.dlp.email.rules.bulkEdit(body));
};

export default { metadata, tool, handler };
