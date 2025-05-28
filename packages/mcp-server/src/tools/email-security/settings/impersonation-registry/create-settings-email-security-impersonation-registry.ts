// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.impersonation_registry',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/email-security/settings/impersonation_registry',
  operationId: 'email_security_create_display_name',
};

export const tool: Tool = {
  name: 'create_settings_email_security_impersonation_registry',
  description: 'Create an entry in impersonation registry',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      email: {
        type: 'string',
      },
      is_email_regex: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.emailSecurity.settings.impersonationRegistry.create(body);
};

export default { metadata, tool, handler };
