// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.commands.devices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/commands/devices',
  operationId: 'get-commands-eligible-devices',
};

export const tool: Tool = {
  name: 'list_commands_dex_zero_trust_devices',
  description:
    'List devices with WARP client support for remote captures which have been connected in the last 1 hour.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page',
      },
      search: {
        type: 'string',
        description: 'Filter devices by name or email',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.dex.commands.devices.list(body));
};

export default { metadata, tool, handler };
