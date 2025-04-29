// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'web3.hostnames',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_web3_hostnames',
  description: 'Web3 Hostname Details',
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
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identifier, ...body } = args as any;
  return client.web3.hostnames.get(identifier, body);
};

export default { metadata, tool, handler };
