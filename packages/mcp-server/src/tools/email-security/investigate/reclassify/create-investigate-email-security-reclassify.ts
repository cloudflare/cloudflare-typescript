// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.investigate.reclassify',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_investigate_email_security_reclassify',
  description: 'Change email classfication',
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
      expected_disposition: {
        type: 'string',
        enum: ['NONE', 'BULK', 'MALICIOUS', 'SPAM', 'SPOOF', 'SUSPICIOUS'],
      },
      eml_content: {
        type: 'string',
        description: 'Base64 encoded content of the EML file',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { postfix_id, ...body } = args;
  return client.emailSecurity.investigate.reclassify.create(postfix_id, body);
};

export default { metadata, tool, handler };
