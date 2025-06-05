// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.custom.excludes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/policy/{policy_id}/exclude',
  operationId: 'devices-get-split-tunnel-exclude-list-for-a-device-settings-policy',
};

export const tool: Tool = {
  name: 'get_custom_policies_devices_zero_trust_excludes',
  description:
    "Fetches the list of routes excluded from the WARP client's tunnel for a specific device settings profile.",
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
  return asTextContentResult(await client.zeroTrust.devices.policies.custom.excludes.get(policy_id, body));
};

export default { metadata, tool, handler };
