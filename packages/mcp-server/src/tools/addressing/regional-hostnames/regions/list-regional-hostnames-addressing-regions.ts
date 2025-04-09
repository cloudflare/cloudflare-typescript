// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.regional_hostnames.regions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_regional_hostnames_addressing_regions',
  description: 'List all Regional Services regions available for use by this account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.addressing.regionalHostnames.regions.list(body);
};

export default { metadata, tool, handler };
