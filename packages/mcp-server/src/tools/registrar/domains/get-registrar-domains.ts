// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'registrar.domains',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/registrar/domains/{domain_name}',
  operationId: 'registrar-domains-get-domain',
};

export const tool: Tool = {
  name: 'get_registrar_domains',
  description: 'Show individual domain.',
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
    },
    required: ['account_id', 'domain_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { domain_name, ...body } = args as any;
  return asTextContentResult((await client.registrar.domains.get(domain_name, body)) as object);
};

export default { metadata, tool, handler };
