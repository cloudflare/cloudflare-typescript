// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.service_tokens',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_access_zero_trust_service_tokens',
  description: 'Lists all service tokens.',
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
      name: {
        type: 'string',
        description: 'The name of the service token.',
      },
      search: {
        type: 'string',
        description: 'Search for service tokens by other listed query parameters.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.access.serviceTokens.list(body);
};

export default { metadata, tool, handler };
