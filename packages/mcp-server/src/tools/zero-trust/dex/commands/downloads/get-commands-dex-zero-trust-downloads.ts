// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.commands.downloads',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/commands/{command_id}/downloads/{filename}',
  operationId: 'get-commands-command-id-downloads-filename',
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
    required: ['account_id', 'command_id', 'filename'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { filename, ...body } = args as any;
  return asBinaryContentResult(await client.zeroTrust.dex.commands.downloads.get(filename, body));
};

export default { metadata, tool, handler };
