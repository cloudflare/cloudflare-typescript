// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_resource_sharing',
  description: 'Lists all account shares.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier.',
      },
      direction: {
        type: 'string',
        description: 'Direction to sort objects.',
        enum: ['asc', 'desc'],
      },
      kind: {
        type: 'string',
        description: 'Filter shares by kind.',
        enum: ['sent', 'received'],
      },
      order: {
        type: 'string',
        description: 'Order shares by values in the given field.',
        enum: ['name', 'created'],
      },
      page: {
        type: 'integer',
        description: 'Page number.',
      },
      per_page: {
        type: 'integer',
        description: 'Number of objects to return per page.',
      },
      status: {
        type: 'string',
        description: 'Filter shares by status.',
        enum: ['active', 'deleting', 'deleted'],
      },
      target_type: {
        type: 'string',
        description: 'Filter shares by target_type.',
        enum: ['account', 'organization'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.resourceSharing.list(body);
};

export default { metadata, tool, handler };
