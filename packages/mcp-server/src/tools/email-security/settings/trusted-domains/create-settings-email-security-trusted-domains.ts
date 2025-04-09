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
  name: 'create_settings_email_security_trusted_domains',
  description: 'Create a trusted email domain',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            title: 'account_id',
            description: 'Account Identifier',
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
          comments: {
            type: 'string',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            title: 'account_id',
            description: 'Account Identifier',
          },
          body: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
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
                comments: {
                  type: 'string',
                },
              },
              required: ['is_recent', 'is_regex', 'is_similarity', 'pattern'],
            },
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailSecurity.settings.trustedDomains.create(body);
};

export default { metadata, tool, handler };
