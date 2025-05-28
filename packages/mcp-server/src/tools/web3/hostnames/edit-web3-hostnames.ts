// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'web3.hostnames',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/web3/hostnames/{identifier}',
  operationId: 'web3-hostname-edit-web3-hostname',
};

export const tool: Tool = {
  name: 'edit_web3_hostnames',
  description: 'Edit Web3 Hostname',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Specify the identifier of the hostname.',
      },
      identifier: {
        type: 'string',
        description: 'Specify the identifier of the hostname.',
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
  const { identifier, ...body } = args as any;
  return client.web3.hostnames.edit(identifier, body);
};

export default { metadata, tool, handler };
