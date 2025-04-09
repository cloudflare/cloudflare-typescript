// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.asn',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_intel_asn',
  description: 'Gets an overview of the Autonomous System Number (ASN) and a list of subnets for it.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      asn: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { asn, ...body } = args;
  return client.intel.asn.get(asn, body);
};

export default { metadata, tool, handler };
