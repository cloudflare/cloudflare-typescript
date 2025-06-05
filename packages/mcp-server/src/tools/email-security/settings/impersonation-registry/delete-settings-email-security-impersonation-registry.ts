// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.impersonation_registry',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/email-security/settings/impersonation_registry/{display_name_id}',
  operationId: 'email_security_delete_display_name',
};

export const tool: Tool = {
  name: 'delete_settings_email_security_impersonation_registry',
  description: 'Delete an entry from impersonation registry',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { display_name_id, ...body } = args as any;
  return asTextContentResult(
    await client.emailSecurity.settings.impersonationRegistry.delete(display_name_id, body),
  );
};

export default { metadata, tool, handler };
