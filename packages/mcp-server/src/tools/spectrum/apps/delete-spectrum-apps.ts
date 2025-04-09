// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'spectrum.apps',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_spectrum_apps',
  description: 'Deletes a previously existing application.',
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
  return client.spectrum.apps.delete(app_id, body);
};

export default { metadata, tool, handler };
