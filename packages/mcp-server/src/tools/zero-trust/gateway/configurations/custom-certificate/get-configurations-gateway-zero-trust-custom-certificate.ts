// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.configurations.custom_certificate',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_configurations_gateway_zero_trust_custom_certificate',
  description: 'Fetches the current Zero Trust certificate configuration.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.gateway.configurations.customCertificate.get(body);
};

export default { metadata, tool, handler };
