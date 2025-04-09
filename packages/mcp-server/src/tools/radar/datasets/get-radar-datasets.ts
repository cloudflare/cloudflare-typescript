// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.datasets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_radar_datasets',
  description:
    'Retrieves the CSV content of a given dataset by alias or ID. When getting the content by alias the latest dataset is returned, optionally filtered by the latest available at a given date.',
  inputSchema: {
    type: 'object',
    properties: {
      alias: {
        type: 'string',
        description: 'Dataset alias or ID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { alias } = args;
  return client.radar.datasets.get(alias);
};

export default { metadata, tool, handler };
