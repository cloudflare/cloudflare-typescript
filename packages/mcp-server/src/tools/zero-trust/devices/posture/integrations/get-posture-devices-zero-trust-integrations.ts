// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.posture.integrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/posture/integration/{integration_id}',
  operationId: 'device-posture-integrations-device-posture-integration-details',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { integration_id, ...body } = args as any;
  return client.zeroTrust.devices.posture.integrations.get(integration_id, body);
};

export default { metadata, tool, handler };
