// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_custom_hostnames',
  description: 'List, search, sort, and filter all of your custom hostnames.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      id: {
        type: 'string',
        description:
          "Hostname ID to match against. This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter.",
      },
      direction: {
        type: 'string',
        description: 'Direction to order hostnames.',
        enum: ['asc', 'desc'],
      },
      hostname: {
        type: 'string',
        description:
          "Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter.",
      },
      order: {
        type: 'string',
        description: 'Field to order hostnames by.',
        enum: ['ssl', 'ssl_status'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of hostnames per page.',
      },
      ssl: {
        type: 'string',
        description: 'Whether to filter hostnames based on if they have SSL enabled.',
        enum: [0, 1],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.customHostnames.list(body);
};

export default { metadata, tool, handler };
