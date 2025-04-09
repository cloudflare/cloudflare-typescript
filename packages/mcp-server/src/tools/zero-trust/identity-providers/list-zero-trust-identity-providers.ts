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
  name: 'list_zero_trust_identity_providers',
  description: 'Lists all configured identity providers.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      scim_enabled: {
        type: 'string',
        description:
          'Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.identityProviders.list(body);
};

export default { metadata, tool, handler };
