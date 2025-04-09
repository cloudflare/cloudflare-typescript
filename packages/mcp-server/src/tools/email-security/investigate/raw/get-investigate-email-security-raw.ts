// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.investigate.raw',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_investigate_email_security_raw',
  description: 'Returns the raw eml of any non-benign message.',
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
  const { postfix_id, ...body } = args;
  return client.emailSecurity.investigate.raw.get(postfix_id, body);
};

export default { metadata, tool, handler };
