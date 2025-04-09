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
          default_nameservers: {
            type: 'string',
            description:
              'Specifies the default nameservers to be used for new zones added to this account.\n\n- `cloudflare.standard` for Cloudflare-branded nameservers\n- `custom.account` for account custom nameservers\n- `custom.tenant` for tenant custom nameservers\n\nSee [Custom Nameservers](https://developers.cloudflare.com/dns/additional-options/custom-nameservers/)\nfor more information.\n\nDeprecated in favor of [DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-an-account-update-dns-settings).',
            enum: ['cloudflare.standard', 'custom.account', 'custom.tenant'],
          },
          enforce_twofactor: {
            type: 'boolean',
            description:
              'Indicates whether membership in this account requires that\nTwo-Factor Authentication is enabled',
          },
          use_account_custom_ns_by_default: {
            type: 'boolean',
            description:
              'Indicates whether new zones should use the account-level custom\nnameservers by default.\n\nDeprecated in favor of [DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-an-account-update-dns-settings).',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.accounts.update(body);
};

export default { metadata, tool, handler };
