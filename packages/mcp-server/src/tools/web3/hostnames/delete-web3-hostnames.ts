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
  name: 'delete_web3_hostnames',
  description: 'Delete Web3 Hostname',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identifier, ...body } = args;
  return client.web3.hostnames.delete(identifier, body);
};

export default { metadata, tool, handler };
