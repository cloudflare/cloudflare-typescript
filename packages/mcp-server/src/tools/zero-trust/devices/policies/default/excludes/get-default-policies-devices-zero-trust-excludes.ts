// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.default.excludes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_default_policies_devices_zero_trust_excludes',
  description: "Fetches the list of routes excluded from the WARP client's tunnel.",
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
  return client.zeroTrust.devices.policies.default.excludes.get(body);
};

export default { metadata, tool, handler };
