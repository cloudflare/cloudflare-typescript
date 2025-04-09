// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'registrar.domains',
  operation: 'read',
  tags: [],
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { domain_name, ...body } = args;
  return client.registrar.domains.get(domain_name, body);
};

export default { metadata, tool, handler };
