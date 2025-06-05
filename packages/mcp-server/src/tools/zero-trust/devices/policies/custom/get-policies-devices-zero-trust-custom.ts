// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.custom',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/policy/{policy_id}',
  operationId: 'devices-get-device-settings-policy-by-id',
};

export const tool: Tool = {
  name: 'get_policies_devices_zero_trust_custom',
  description: 'Fetches a device settings profile by ID.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      policy_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.devices.policies.custom.get(policy_id, body));
};

export default { metadata, tool, handler };
