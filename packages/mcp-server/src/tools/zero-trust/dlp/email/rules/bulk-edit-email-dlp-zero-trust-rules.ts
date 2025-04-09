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

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dlp.email.rules.bulkEdit(body);
};

export default { metadata, tool, handler };
