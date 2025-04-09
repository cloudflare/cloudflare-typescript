// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zaraz.publish',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_zaraz_publish',
  description: 'Publish current Zaraz preview configuration for a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      body: {
        type: 'string',
        description: 'Zaraz configuration description.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zaraz.publish.create(body);
};

export default { metadata, tool, handler };
