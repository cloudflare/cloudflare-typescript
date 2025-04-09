// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.investigate.release',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'bulk_investigate_email_security_release',
  description: 'Release messages from quarantine',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      body: {
        type: 'array',
        description: 'A list of messages identfied by their `postfix_id`s that should be released.',
        items: {
          type: 'string',
          title: 'postfix_id',
          description: 'The identifier of the message.',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailSecurity.investigate.release.bulk(body);
};

export default { metadata, tool, handler };
