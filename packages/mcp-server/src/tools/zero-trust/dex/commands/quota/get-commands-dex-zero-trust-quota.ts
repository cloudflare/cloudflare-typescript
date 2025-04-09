// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.commands.quota',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_commands_dex_zero_trust_quota',
  description:
    'Retrieves the current quota usage and limits for device commands within a specific account, including the time when the quota will reset',
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
  return client.zeroTrust.dex.commands.quota.get(body);
};

export default { metadata, tool, handler };
