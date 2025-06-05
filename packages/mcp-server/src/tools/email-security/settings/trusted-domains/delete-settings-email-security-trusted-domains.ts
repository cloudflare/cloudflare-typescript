// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.trusted_domains',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}',
  operationId: 'email_security_delete_trusted_domain',
};

export const tool: Tool = {
  name: 'delete_settings_email_security_trusted_domains',
  description: 'Delete a trusted email domain',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      trusted_domain_id: {
        type: 'integer',
        title: 'identifier',
        description: 'The unique identifier for the trusted domain.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { trusted_domain_id, ...body } = args as any;
  return asTextContentResult(
    await client.emailSecurity.settings.trustedDomains.delete(trusted_domain_id, body),
  );
};

export default { metadata, tool, handler };
