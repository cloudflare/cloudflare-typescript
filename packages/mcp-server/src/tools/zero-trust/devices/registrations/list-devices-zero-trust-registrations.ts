// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.registrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/registrations',
  operationId: 'list-registrations',
};

export const tool: Tool = {
  name: 'list_devices_zero_trust_registrations',
  description: 'Lists WARP registrations.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'array',
        description: 'Filter by registration ID.',
        items: {
          type: 'string',
        },
      },
      cursor: {
        type: 'string',
        description:
          'Opaque token indicating the starting position when requesting the next set of records. A cursor value can be obtained from the result_info.cursor field in the response.',
      },
      device: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Filter by WARP device ID.',
          },
        },
        required: [],
      },
      include: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
        description: 'The maximum number of devices to return in a single response.',
      },
      search: {
        type: 'string',
        description: 'Filter by registration details.',
      },
      seen_after: {
        type: 'string',
        description:
          'Filter by the last_seen timestamp - returns only registrations last seen after this timestamp.',
      },
      seen_before: {
        type: 'string',
        description:
          'Filter by the last_seen timestamp - returns only registrations last seen before this timestamp.',
      },
      sort_by: {
        type: 'string',
        description: 'The registration field to order results by.',
        enum: ['id', 'user.name', 'user.email', 'last_seen_at', 'created_at'],
      },
      sort_order: {
        type: 'string',
        description: 'Sort direction.',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'string',
        description: "Filter by registration status. Defaults to 'active'.",
        enum: ['active', 'all', 'revoked'],
      },
      user: {
        type: 'object',
        properties: {
          id: {
            type: 'array',
            description: 'Filter by user ID.',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.devices.registrations.list(body));
};

export default { metadata, tool, handler };
