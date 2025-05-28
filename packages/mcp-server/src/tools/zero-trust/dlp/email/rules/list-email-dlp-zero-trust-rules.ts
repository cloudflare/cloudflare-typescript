// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.email.rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dlp/email/rules',
  operationId: 'dlp-email-scanner-list-all-rules',
};

export const tool: Tool = {
  name: 'list_email_dlp_zero_trust_rules',
  description: 'Lists all email scanner rules for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zeroTrust.dlp.email.rules.list(body);
};

export default { metadata, tool, handler };
