// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.posture.integrations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_posture_devices_zero_trust_integrations',
  description: 'Fetches details for a single device posture integration.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      integration_id: {
        type: 'string',
        description: 'API UUID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { integration_id, ...body } = args;
  return client.zeroTrust.devices.posture.integrations.get(integration_id, body);
};

export default { metadata, tool, handler };
