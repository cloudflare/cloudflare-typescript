// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.keys',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_access_zero_trust_keys',
  description: 'Updates the Access key rotation settings for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      key_rotation_interval_days: {
        type: 'number',
        description: 'The number of days between key rotations.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.access.keys.update(body);
};

export default { metadata, tool, handler };
