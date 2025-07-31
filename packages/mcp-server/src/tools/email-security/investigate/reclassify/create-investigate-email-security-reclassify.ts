// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.investigate.reclassify',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/email-security/investigate/{postfix_id}/reclassify',
  operationId: 'email_security_post_reclassify',
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
    required: ['account_id', 'postfix_id', 'expected_disposition'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { postfix_id, ...body } = args as any;
  return asTextContentResult(
    (await client.emailSecurity.investigate.reclassify.create(postfix_id, body)) as object,
  );
};

export default { metadata, tool, handler };
