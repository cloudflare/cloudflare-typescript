// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.trusted_domains',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_settings_email_security_trusted_domains',
  description: 'Update a trusted email domain',
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
      comments: {
        type: 'string',
      },
      is_recent: {
        type: 'boolean',
        description:
          'Select to prevent recently registered domains from triggering a\nSuspicious or Malicious disposition.',
      },
      is_regex: {
        type: 'boolean',
      },
      is_similarity: {
        type: 'boolean',
        description:
          'Select for partner or other approved domains that have similar\nspelling to your connected domains. Prevents listed domains from\ntriggering a Spoof disposition.',
      },
      pattern: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { trusted_domain_id, ...body } = args;
  return client.emailSecurity.settings.trustedDomains.edit(trusted_domain_id, body);
};

export default { metadata, tool, handler };
