// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_accounts',
  description: 'Update an existing account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      name: {
        type: 'string',
        description: 'Account name',
      },
      settings: {
        type: 'object',
        description: 'Account settings',
        properties: {
          abuse_contact_email: {
            type: 'string',
            description: 'Sets an abuse contact email to notify for abuse reports.',
          },
          enforce_twofactor: {
            type: 'boolean',
            description:
              'Indicates whether membership in this account requires that\nTwo-Factor Authentication is enabled',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.accounts.update(body);
};

export default { metadata, tool, handler };
