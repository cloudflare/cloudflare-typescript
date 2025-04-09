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
  name: 'create_web3_hostnames',
  description: 'Create Web3 Hostname',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      name: {
        type: 'string',
        description: 'The hostname that will point to the target gateway via CNAME.',
      },
      target: {
        type: 'string',
        description: 'Target gateway of the hostname.',
        enum: ['ethereum', 'ipfs', 'ipfs_universal_path'],
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
  const { ...body } = args;
  return client.web3.hostnames.create(body);
};

export default { metadata, tool, handler };
