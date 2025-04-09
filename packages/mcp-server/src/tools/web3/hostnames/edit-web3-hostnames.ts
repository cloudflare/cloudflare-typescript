// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'web3.hostnames',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_web3_hostnames',
  description: 'Edit Web3 Hostname',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      identifier: {
        type: 'string',
        description: 'Identifier',
      },
      description: {
        type: 'string',
        description: 'An optional description of the hostname.',
      },
      dnslink: {
        type: 'string',
        description: 'DNSLink value used if the target is ipfs.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identifier, ...body } = args;
  return client.web3.hostnames.edit(identifier, body);
};

export default { metadata, tool, handler };
