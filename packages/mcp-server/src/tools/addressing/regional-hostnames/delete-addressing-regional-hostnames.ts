// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.regional_hostnames',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_addressing_regional_hostnames',
  description: 'Delete the region configuration for a specific Regional Hostname.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      hostname: {
        type: 'string',
        description:
          'DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are supported for one level, e.g `*.example.com`',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { hostname, ...body } = args;
  return client.addressing.regionalHostnames.delete(hostname, body);
};

export default { metadata, tool, handler };
