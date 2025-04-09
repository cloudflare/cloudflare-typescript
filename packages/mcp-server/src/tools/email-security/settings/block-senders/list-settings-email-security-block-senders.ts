// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.block_senders',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_settings_email_security_block_senders',
  description: 'List blocked email senders',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      direction: {
        type: 'string',
        description: 'The sorting direction.',
        enum: ['asc', 'desc'],
      },
      order: {
        type: 'string',
        description: 'The field to sort by.',
        enum: ['pattern', 'created_at'],
      },
      page: {
        type: 'integer',
        description: 'The page number of paginated results.',
      },
      pattern_type: {
        type: 'string',
        enum: ['EMAIL', 'DOMAIN', 'IP', 'UNKNOWN'],
      },
      per_page: {
        type: 'integer',
        description: 'The number of results per page.',
      },
      search: {
        type: 'string',
        description:
          'Allows searching in multiple properties of a record simultaneously.\nThis parameter is intended for human users, not automation. Its exact\nbehavior is intentionally left unspecified and is subject to change\nin the future.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailSecurity.settings.blockSenders.list(body);
};

export default { metadata, tool, handler };
