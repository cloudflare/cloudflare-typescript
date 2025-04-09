// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_custom_hostnames',
  description: 'Delete Custom Hostname (and any issued SSL certificates)',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      custom_hostname_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { custom_hostname_id, ...body } = args;
  return client.customHostnames.delete(custom_hostname_id, body);
};

export default { metadata, tool, handler };
