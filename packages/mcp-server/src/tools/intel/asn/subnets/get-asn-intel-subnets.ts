// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.asn.subnets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_asn_intel_subnets',
  description: 'Get ASN Subnets',
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
  return client.intel.asn.subnets.get(asn, body);
};

export default { metadata, tool, handler };
