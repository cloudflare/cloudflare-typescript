// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.service_bindings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_prefixes_addressing_service_bindings',
  description:
    "Creates a new Service Binding, routing traffic to IPs within the given CIDR to a service running on Cloudflare's network.\n**Note:** This API may only be used on prefixes currently configured with a Magic Transit/Cloudflare CDN/Cloudflare Spectrum service binding, and only allows creating upgrade service bindings for the Cloudflare CDN or Cloudflare Spectrum.\n",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      prefix_id: {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
      },
      cidr: {
        type: 'string',
        description: 'IP Prefix in Classless Inter-Domain Routing format.',
      },
      service_id: {
        type: 'string',
        description:
          'Identifier of a Service on the Cloudflare network. Available services and their IDs may be found in the\n**List Services** endpoint.\n',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { prefix_id, ...body } = args;
  return client.addressing.prefixes.serviceBindings.create(prefix_id, body);
};

export default { metadata, tool, handler };
