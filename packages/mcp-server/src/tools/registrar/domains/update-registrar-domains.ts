// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'registrar.domains',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/registrar/domains/{domain_name}',
  operationId: 'registrar-domains-update-domain',
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
    required: ['account_id', 'domain_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { domain_name, ...body } = args as any;
  return asTextContentResult((await client.registrar.domains.update(domain_name, body)) as object);
};

export default { metadata, tool, handler };
