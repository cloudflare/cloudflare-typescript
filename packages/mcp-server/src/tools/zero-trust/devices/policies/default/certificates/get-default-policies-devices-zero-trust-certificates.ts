// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.default.certificates',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_default_policies_devices_zero_trust_certificates',
  description: 'Fetches device certificate provisioning',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.devices.policies.default.certificates.get(body);
};

export default { metadata, tool, handler };
