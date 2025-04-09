// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'spectrum.apps',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_spectrum_apps',
  description: 'Gets the application configuration of a specific application inside a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Zone identifier.',
      },
      app_id: {
        type: 'string',
        description: 'App identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { app_id, ...body } = args;
  return client.spectrum.apps.get(app_id, body);
};

export default { metadata, tool, handler };
