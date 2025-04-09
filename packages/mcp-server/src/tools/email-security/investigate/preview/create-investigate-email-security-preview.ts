// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.investigate.preview',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_investigate_email_security_preview',
  description: 'Preview for non-detection messages',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      postfix_id: {
        type: 'string',
        title: 'postfix_id',
        description: 'The identifier of the message.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailSecurity.investigate.preview.create(body);
};

export default { metadata, tool, handler };
