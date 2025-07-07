// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.devices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/physical-devices',
  operationId: 'list-devices',
};

export const tool: Tool = {
  name: 'list_devices_zero_trust_devices',
  description: 'Lists WARP devices.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'array',
        description: 'Filter by a one or more device IDs.',
        items: {
          type: 'string',
        },
      },
      active_registrations: {
        type: 'string',
        description:
          'Include or exclude devices with active registrations. The default is "only" - return only devices with active registrations.',
        enum: ['include', 'only', 'exclude'],
      },
      cursor: {
        type: 'string',
        description:
          'Opaque token indicating the starting position when requesting the next set of records. A cursor value can be obtained from the result_info.cursor field in the response.',
      },
      include: {
        type: 'string',
      },
      last_seen_user: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: "Filter by the last seen user's email.",
          },
        },
        required: [],
      },
      per_page: {
        type: 'integer',
        description: 'The maximum number of devices to return in a single response.',
      },
      search: {
        type: 'string',
        description: 'Search by device details.',
      },
      seen_after: {
        type: 'string',
        description:
          'Filter by the last_seen timestamp - returns only devices last seen after this timestamp.',
      },
      seen_before: {
        type: 'string',
        description:
          'Filter by the last_seen timestamp - returns only devices last seen before this timestamp.',
      },
      sort_by: {
        type: 'string',
        description: 'The device field to order results by.',
        enum: [
          'name',
          'id',
          'client_version',
          'last_seen_user.email',
          'last_seen_at',
          'active_registrations',
          'created_at',
        ],
      },
      sort_order: {
        type: 'string',
        description: 'Sort direction.',
        enum: ['asc', 'desc'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.devices.devices.list(body));
};

export default { metadata, tool, handler };
