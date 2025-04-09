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
  name: 'edit_settings_email_security_block_senders',
  description: 'Update a blocked email sender',
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
      comments: {
        type: 'string',
      },
      is_regex: {
        type: 'boolean',
      },
      pattern: {
        type: 'string',
      },
      pattern_type: {
        type: 'string',
        enum: ['EMAIL', 'DOMAIN', 'IP', 'UNKNOWN'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { pattern_id, ...body } = args;
  return client.emailSecurity.settings.blockSenders.edit(pattern_id, body);
};

export default { metadata, tool, handler };
