// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'revoke_tokens_access_zero_trust_applications',
  description: 'Revokes all tokens issued for an application.',
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        description: 'Identifier.',
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
  const { app_id, ...body } = args;
  return client.zeroTrust.access.applications.revokeTokens(app_id, body);
};

export default { metadata, tool, handler };
