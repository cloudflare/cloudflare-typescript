// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames.fallback_origin',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/custom_hostnames/fallback_origin',
  operationId: 'custom-hostname-fallback-origin-for-a-zone-delete-fallback-origin-for-custom-hostnames',
};

export const tool: Tool = {
  name: 'delete_custom_hostnames_fallback_origin',
  description: 'Delete Fallback Origin for Custom Hostnames',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.customHostnames.fallbackOrigin.delete(body);
};

export default { metadata, tool, handler };
