// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.posture',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_devices_zero_trust_posture',
  description: 'Fetches a single device posture rule.',
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.zeroTrust.devices.posture.get(rule_id, body);
};

export default { metadata, tool, handler };
