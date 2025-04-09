// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.domains',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_settings_email_security_domains',
  description: 'Get an email domain',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      domain_id: {
        type: 'integer',
        description: 'The unique identifier for the domain.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { domain_id, ...body } = args;
  return client.emailSecurity.settings.domains.get(domain_id, body);
};

export default { metadata, tool, handler };
