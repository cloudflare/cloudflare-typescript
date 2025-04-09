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
  name: 'list_registrar_domains',
  description: 'List domains handled by Registrar.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.registrar.domains.list(body);
};

export default { metadata, tool, handler };
