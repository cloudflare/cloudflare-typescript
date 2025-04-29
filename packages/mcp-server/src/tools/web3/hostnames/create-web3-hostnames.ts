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
        description: 'Specify the identifier of the hostname.',
      },
      name: {
        type: 'string',
        description: 'Specify the hostname that points to the target gateway via CNAME.',
      },
      target: {
        type: 'string',
        description: 'Specify the target gateway of the hostname.',
        enum: ['ethereum', 'ipfs', 'ipfs_universal_path'],
      },
      description: {
        type: 'string',
        description: 'Specify an optional description of the hostname.',
      },
      dnslink: {
        type: 'string',
        description: 'Specify the DNSLink value used if the target is ipfs.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.web3.hostnames.create(body);
};

export default { metadata, tool, handler };
