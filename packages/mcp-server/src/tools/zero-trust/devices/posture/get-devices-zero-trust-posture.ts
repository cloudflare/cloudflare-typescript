// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.posture',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/posture/{rule_id}',
  operationId: 'device-posture-rules-device-posture-rules-details',
};

export const tool: Tool = {
  name: 'get_devices_zero_trust_posture',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a single device posture rule.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      rule_id: {
        type: 'string',
        description: 'API UUID.',
      },
    },
    required: ['account_id', 'rule_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.devices.posture.get(rule_id, body));
};

export default { metadata, tool, handler };
