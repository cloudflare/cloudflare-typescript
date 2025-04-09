// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.service_tokens',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'rotate_access_zero_trust_service_tokens',
  description: 'Generates a new Client Secret for a service token and revokes the old one.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      service_token_id: {
        type: 'string',
        description: 'UUID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { service_token_id, ...body } = args;
  return client.zeroTrust.access.serviceTokens.rotate(service_token_id, body);
};

export default { metadata, tool, handler };
