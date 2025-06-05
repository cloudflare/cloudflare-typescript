// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.block_senders',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/email-security/settings/block_senders/{pattern_id}',
  operationId: 'email_security_update_blocked_sender',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pattern_id, ...body } = args as any;
  return asTextContentResult(await client.emailSecurity.settings.blockSenders.edit(pattern_id, body));
};

export default { metadata, tool, handler };
