// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.services',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_addressing_services',
  description:
    'Bring-Your-Own IP (BYOIP) prefixes onboarded to Cloudflare must be bound to a service running on the Cloudflare network to enable a Cloudflare product on the IP addresses. This endpoint can be used as a reference of available services on the Cloudflare network, and their service IDs.\n',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.addressing.services.list(body);
};

export default { metadata, tool, handler };
