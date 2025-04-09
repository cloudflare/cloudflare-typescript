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
  name: 'edit_addressing_regional_hostnames',
  description:
    'Update the configuration for a specific Regional Hostname. Only the region_key of a hostname is mutable.',
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
      region_key: {
        type: 'string',
        description: 'Identifying key for the region',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { hostname, ...body } = args;
  return client.addressing.regionalHostnames.edit(hostname, body);
};

export default { metadata, tool, handler };
