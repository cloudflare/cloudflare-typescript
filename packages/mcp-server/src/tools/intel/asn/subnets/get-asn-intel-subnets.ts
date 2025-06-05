// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.asn.subnets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/intel/asn/{asn}/subnets',
  operationId: 'asn-intelligence-get-asn-subnets',
};

export const tool: Tool = {
  name: 'get_asn_intel_subnets',
  description: 'Get ASN Subnets.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      asn: {
        $ref: '#/$defs/asn',
      },
    },
    $defs: {
      asn: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { asn, ...body } = args as any;
  return asTextContentResult(await client.intel.asn.subnets.get(asn, body));
};

export default { metadata, tool, handler };
