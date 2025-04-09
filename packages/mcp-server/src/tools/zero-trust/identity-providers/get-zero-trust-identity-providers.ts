// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.identity_providers',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_zero_trust_identity_providers',
  description: 'Fetches a configured identity provider.',
  inputSchema: {
    type: 'object',
    properties: {
      identity_provider_id: {
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
  const { identity_provider_id, ...body } = args;
  return client.zeroTrust.identityProviders.get(identity_provider_id, body);
};

export default { metadata, tool, handler };
