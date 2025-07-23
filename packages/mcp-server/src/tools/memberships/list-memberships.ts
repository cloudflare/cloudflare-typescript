// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'memberships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/memberships',
  operationId: "user'-s-account-memberships-list-memberships",
};

export const tool: Tool = {
  name: 'list_memberships',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList memberships of accounts the user can access.",
  inputSchema: {
    type: 'object',
    properties: {
      account: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Account name',
          },
        },
      },
      direction: {
        type: 'string',
        description: 'Direction to order memberships.',
        enum: ['asc', 'desc'],
      },
      name: {
        type: 'string',
        description: 'Account name',
      },
      order: {
        type: 'string',
        description: 'Field to order memberships by.',
        enum: ['id', 'account.name', 'status'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of memberships per page.',
      },
      status: {
        type: 'string',
        description: 'Status of this membership.',
        enum: ['accepted', 'pending', 'rejected'],
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.memberships.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
