// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'filters',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/filters/{filter_id}',
  operationId: 'filters-update-a-filter',
};

export const tool: Tool = {
  name: 'update_filters',
  description: 'Updates an existing filter.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      filter_id: {
        type: 'string',
        description: 'The unique identifier of the filter.',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { filter_id, ...body } = args as any;
  return asTextContentResult(await client.filters.update(filter_id, body));
};

export default { metadata, tool, handler };
