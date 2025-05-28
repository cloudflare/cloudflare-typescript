// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.investigate.move',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/email-security/investigate/move',
  operationId: 'email_security_post_bulk_message_move',
};

export const tool: Tool = {
  name: 'bulk_investigate_email_security_move',
  description: 'Move multiple messages',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      destination: {
        type: 'string',
        enum: ['Inbox', 'JunkEmail', 'DeletedItems', 'RecoverableItemsDeletions', 'RecoverableItemsPurges'],
      },
      postfix_ids: {
        type: 'array',
        items: {
          type: 'string',
          title: 'postfix_id',
          description: 'The identifier of the message.',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.emailSecurity.investigate.move.bulk(body);
};

export default { metadata, tool, handler };
