// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.gateway_ca',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_access_zero_trust_gateway_ca',
  description: 'Deletes an SSH Certificate Authority.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate_id: {
        type: 'string',
        description: 'UUID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { certificate_id, ...body } = args;
  return client.zeroTrust.access.gatewayCA.delete(certificate_id, body);
};

export default { metadata, tool, handler };
