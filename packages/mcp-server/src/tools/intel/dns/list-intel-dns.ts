// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.dns',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_intel_dns',
  description: 'Gets a list of all the domains that have resolved to a specific IP address.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      ipv4: {
        type: 'string',
      },
      page: {
        type: 'number',
        description: 'Requested page within paginated list of results.',
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of results requested.',
      },
      start_end_params: {
        type: 'object',
        properties: {
          end: {
            type: 'string',
            description: 'Defaults to the current date.',
            format: 'date',
          },
          start: {
            type: 'string',
            description: 'Defaults to 30 days before the end parameter value.',
            format: 'date',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.intel.dns.list(body);
};

export default { metadata, tool, handler };
