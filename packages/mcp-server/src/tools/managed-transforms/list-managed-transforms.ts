// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'managed_transforms',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_managed_transforms',
  description: 'Fetches a list of all Managed Transforms.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'ID',
        description: 'The unique ID of the zone.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.managedTransforms.list(body);
};

export default { metadata, tool, handler };
