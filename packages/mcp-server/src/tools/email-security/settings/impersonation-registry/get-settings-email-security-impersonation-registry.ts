// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.impersonation_registry',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_settings_email_security_impersonation_registry',
  description: 'Get an entry in impersonation registry',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      display_name_id: {
        type: 'integer',
        title: 'identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { display_name_id, ...body } = args;
  return client.emailSecurity.settings.impersonationRegistry.get(display_name_id, body);
};

export default { metadata, tool, handler };
