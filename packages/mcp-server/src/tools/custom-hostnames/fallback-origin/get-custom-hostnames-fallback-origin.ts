// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames.fallback_origin',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_custom_hostnames_fallback_origin',
  description: 'Get Fallback Origin for Custom Hostnames',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.customHostnames.fallbackOrigin.get(body);
};

export default { metadata, tool, handler };
