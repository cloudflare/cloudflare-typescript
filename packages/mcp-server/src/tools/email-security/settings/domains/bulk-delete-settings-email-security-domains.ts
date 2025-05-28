// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.domains',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/email-security/settings/domains',
  operationId: 'email_security_delete_domains',
};

export const tool: Tool = {
  name: 'bulk_delete_settings_email_security_domains',
  description: 'Unprotect multiple email domains',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.emailSecurity.settings.domains.bulkDelete(body);
};

export default { metadata, tool, handler };
