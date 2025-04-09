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
  name: 'create_addressing_regional_hostnames',
  description:
    'Create a new Regional Hostname entry. Cloudflare will only use data centers that are physically located within the chosen region to decrypt and service HTTPS traffic. Learn more about [Regional Services](https://developers.cloudflare.com/data-localization/regional-services/get-started/).',
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
  const { ...body } = args;
  return client.addressing.regionalHostnames.create(body);
};

export default { metadata, tool, handler };
