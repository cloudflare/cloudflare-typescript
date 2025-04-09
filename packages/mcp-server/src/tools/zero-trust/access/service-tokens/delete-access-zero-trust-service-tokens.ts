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
  name: 'delete_access_zero_trust_service_tokens',
  description: 'Deletes a service token.',
  inputSchema: {
    type: 'object',
    properties: {
      service_token_id: {
        type: 'string',
        description: 'UUID.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { service_token_id, ...body } = args;
  return client.zeroTrust.access.serviceTokens.delete(service_token_id, body);
};

export default { metadata, tool, handler };
