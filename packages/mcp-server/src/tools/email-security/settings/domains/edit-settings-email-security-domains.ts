// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.domains',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/email-security/settings/domains/{domain_id}',
  operationId: 'email_security_update_domain',
};

export const tool: Tool = {
  name: 'edit_settings_email_security_domains',
  description: 'Update an email domain',
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
      ip_restrictions: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      allowed_delivery_modes: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['DIRECT', 'BCC', 'JOURNAL', 'API', 'RETRO_SCAN'],
        },
      },
      domain: {
        type: 'string',
      },
      drop_dispositions: {
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'MALICIOUS',
            'MALICIOUS-BEC',
            'SUSPICIOUS',
            'SPOOF',
            'SPAM',
            'BULK',
            'ENCRYPTED',
            'EXTERNAL',
            'UNKNOWN',
            'NONE',
          ],
        },
      },
      folder: {
        type: 'string',
        enum: ['AllItems', 'Inbox'],
      },
      integration_id: {
        type: 'string',
      },
      lookback_hops: {
        type: 'integer',
      },
      require_tls_inbound: {
        type: 'boolean',
      },
      require_tls_outbound: {
        type: 'boolean',
      },
      transport: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { domain_id, ...body } = args as any;
  return asTextContentResult(await client.emailSecurity.settings.domains.edit(domain_id, body));
};

export default { metadata, tool, handler };
