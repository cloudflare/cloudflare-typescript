// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames.fallback_origin',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_custom_hostnames_fallback_origin',
  description: 'Update Fallback Origin for Custom Hostnames',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      origin: {
        type: 'string',
        description: 'Your origin hostname that requests to your custom hostnames will be sent to.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.customHostnames.fallbackOrigin.update(body);
};

export default { metadata, tool, handler };
