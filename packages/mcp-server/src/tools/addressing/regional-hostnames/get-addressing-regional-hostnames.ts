// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.regional_hostnames',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/addressing/regional_hostnames/{hostname}',
  operationId: 'dls-account-regional-hostnames-account-fetch-hostname',
};

export const tool: Tool = {
  name: 'get_addressing_regional_hostnames',
  description: 'Fetch the configuration for a specific Regional Hostname, within a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      hostname: {
        type: 'string',
        description:
          'DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are supported for one level, e.g `*.example.com`',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { hostname, ...body } = args as any;
  return client.addressing.regionalHostnames.get(hostname, body);
};

export default { metadata, tool, handler };
