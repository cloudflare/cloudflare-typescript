// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'speed.pages.tests',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_pages_speed_tests',
  description: 'Retrieves the result of a specific test.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      url: {
        type: 'string',
        description: 'A URL.',
      },
      test_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { test_id, ...body } = args;
  return client.speed.pages.tests.get(test_id, body);
};

export default { metadata, tool, handler };
