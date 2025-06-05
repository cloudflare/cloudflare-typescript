// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames.fallback_origin',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/custom_hostnames/fallback_origin',
  operationId: 'custom-hostname-fallback-origin-for-a-zone-get-fallback-origin-for-custom-hostnames',
};

export const tool: Tool = {
  name: 'get_custom_hostnames_fallback_origin',
  description: 'Get Fallback Origin for Custom Hostnames',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.customHostnames.fallbackOrigin.get(body));
};

export default { metadata, tool, handler };
