// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.custom',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/devices/policy/{policy_id}',
  operationId: 'devices-delete-device-settings-policy',
};

export const tool: Tool = {
  name: 'delete_policies_devices_zero_trust_custom',
  description:
    'Deletes a device settings profile and fetches a list of the remaining profiles for an account.',
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
    required: ['account_id', 'policy_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_id, ...body } = args as any;
  const response = await client.zeroTrust.devices.policies.custom.delete(policy_id, body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
