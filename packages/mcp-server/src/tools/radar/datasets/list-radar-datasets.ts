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
  name: 'list_radar_datasets',
  description: 'Retrieves a list of datasets.',
  inputSchema: {
    type: 'object',
    properties: {
      datasetType: {
        type: 'string',
        description: 'Filters results by dataset type.',
        enum: ['RANKING_BUCKET', 'REPORT'],
      },
      date: {
        type: 'string',
        description: 'Filters results by the specified date.',
        format: 'date',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      offset: {
        type: 'integer',
        description: 'Skips the specified number of objects before fetching the results.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.datasets.list(body);
};

export default { metadata, tool, handler };
