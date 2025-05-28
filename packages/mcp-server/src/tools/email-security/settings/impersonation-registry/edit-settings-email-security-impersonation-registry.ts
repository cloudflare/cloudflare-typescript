// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.impersonation_registry',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/email-security/settings/impersonation_registry/{display_name_id}',
  operationId: 'email_security_update_display_name',
};

export const tool: Tool = {
  name: 'edit_settings_email_security_impersonation_registry',
  description: 'Update an entry in impersonation registry',
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
  const { display_name_id, ...body } = args as any;
  return client.emailSecurity.settings.impersonationRegistry.edit(display_name_id, body);
};

export default { metadata, tool, handler };
