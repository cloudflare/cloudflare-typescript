// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.gateway_ca',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_access_zero_trust_gateway_ca',
  description: 'Lists SSH Certificate Authorities (CA).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.access.gatewayCA.list(body);
};

export default { metadata, tool, handler };
