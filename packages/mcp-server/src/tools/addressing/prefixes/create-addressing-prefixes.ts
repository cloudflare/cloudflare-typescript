// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_addressing_prefixes',
  description: 'Add a new prefix under the account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      asn: {
        type: 'integer',
        description: 'Autonomous System Number (ASN) the prefix will be advertised under.',
      },
      cidr: {
        type: 'string',
        description: 'IP Prefix in Classless Inter-Domain Routing format.',
      },
      loa_document_id: {
        type: 'string',
        description: 'Identifier for the uploaded LOA document.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.addressing.prefixes.create(body);
};

export default { metadata, tool, handler };
