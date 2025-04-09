// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_access_zero_trust_applications',
  description: 'Lists all Access applications in an account or zone.',
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
      aud: {
        type: 'string',
        description: 'The aud of the app.',
      },
      domain: {
        type: 'string',
        description: 'The domain of the app.',
      },
      name: {
        type: 'string',
        description: 'The name of the app.',
      },
      search: {
        type: 'string',
        description: 'Search for apps by other listed query parameters.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.access.applications.list(body);
};

export default { metadata, tool, handler };
