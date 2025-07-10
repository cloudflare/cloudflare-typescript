// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/waiting_rooms',
};

export const tool: Tool = {
  name: 'list_waiting_rooms',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists waiting rooms for account or zone.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of results per page. Must be a multiple of 5.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.waitingRooms.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
