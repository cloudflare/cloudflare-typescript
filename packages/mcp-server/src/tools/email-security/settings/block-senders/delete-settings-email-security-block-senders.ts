// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.block_senders',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_settings_email_security_block_senders',
  description: 'Delete a blocked email sender',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      pattern_id: {
        type: 'integer',
        title: 'identifier',
        description: 'The unique identifier for the allow policy.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { pattern_id, ...body } = args;
  return client.emailSecurity.settings.blockSenders.delete(pattern_id, body);
};

export default { metadata, tool, handler };
