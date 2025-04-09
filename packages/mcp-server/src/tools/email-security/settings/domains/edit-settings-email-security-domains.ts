// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.domains',
  operation: 'write',
  tags: [],
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

export const handler = (client: Cloudflare, args: any) => {
  const { domain_id, ...body } = args;
  return client.emailSecurity.settings.domains.edit(domain_id, body);
};

export default { metadata, tool, handler };
