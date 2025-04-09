// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'registrar.domains',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_registrar_domains',
  description: 'Update individual domain.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      domain_name: {
        type: 'string',
        description: 'Domain name.',
      },
      auto_renew: {
        type: 'boolean',
        description:
          'Auto-renew controls whether subscription is automatically renewed upon domain expiration.',
      },
      locked: {
        type: 'boolean',
        description: 'Shows whether a registrar lock is in place for a domain.',
      },
      privacy: {
        type: 'boolean',
        description: 'Privacy option controls redacting WHOIS information.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { domain_name, ...body } = args;
  return client.registrar.domains.update(domain_name, body);
};

export default { metadata, tool, handler };
