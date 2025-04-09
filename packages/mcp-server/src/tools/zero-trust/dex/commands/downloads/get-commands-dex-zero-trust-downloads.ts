// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.commands.downloads',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_commands_dex_zero_trust_downloads',
  description: 'Downloads artifacts for an executed command. Bulk downloads are not supported',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      command_id: {
        type: 'string',
        description: 'Unique identifier for a command',
      },
      filename: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { filename, ...body } = args;
  return client.zeroTrust.dex.commands.downloads.get(filename, body);
};

export default { metadata, tool, handler };
