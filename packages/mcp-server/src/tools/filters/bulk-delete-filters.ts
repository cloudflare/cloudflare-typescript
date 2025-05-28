// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'filters',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/filters',
  operationId: 'filters-delete-filters',
};

export const tool: Tool = {
  name: 'bulk_delete_filters',
  description: 'Deletes one or more existing filters.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.filters.bulkDelete(body);
};

export default { metadata, tool, handler };
