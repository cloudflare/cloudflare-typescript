// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.subnets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_networks_zero_trust_subnets',
  description: 'Lists and filters subnets in an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      address_family: {
        type: 'string',
        description: 'If set, only include subnets in the given address family - `v4` or `v6`',
        enum: ['v4', 'v6'],
      },
      comment: {
        type: 'string',
        description: 'If set, only list subnets with the given comment.',
      },
      existed_at: {
        type: 'string',
        description:
          'If provided, include only resources that were created (and not deleted) before this time. URL encoded.',
      },
      is_default_network: {
        type: 'boolean',
        description:
          'If `true`, only include default subnets. If `false`, exclude default subnets subnets. If not set, all subnets will be included.',
      },
      is_deleted: {
        type: 'boolean',
        description:
          'If `true`, only include deleted subnets. If `false`, exclude deleted subnets. If not set, all subnets will be included.',
      },
      name: {
        type: 'string',
        description: 'If set, only list subnets with the given name',
      },
      network: {
        type: 'string',
        description: 'If set, only list the subnet whose network exactly matches the given CIDR.',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of results to display.',
      },
      sort_order: {
        type: 'string',
        description:
          'Sort order of the results. `asc` means oldest to newest, `desc` means newest to oldest. If not set, they will not be in any particular order.',
        enum: ['asc', 'desc'],
      },
      subnet_types: {
        type: 'string',
        description: 'If set, the types of subnets to include, separated by comma.',
        enum: ['cloudflare_source', 'warp'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.networks.subnets.list(body);
};

export default { metadata, tool, handler };
