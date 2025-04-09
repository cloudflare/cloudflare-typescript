// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.email.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_email_dlp_zero_trust_rules',
  description: 'Delete email scanner rule',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      rule_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.zeroTrust.dlp.email.rules.delete(rule_id, body);
};

export default { metadata, tool, handler };
