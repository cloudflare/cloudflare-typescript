// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/radar/datasets/download',
  operationId: 'radar-post-reports-dataset-download-url',
};

export const tool: Tool = {
  name: 'download_radar_datasets',
  description: 'Retrieves an URL to download a single dataset.',
  inputSchema: {
    type: 'object',
    properties: {
      datasetId: {
        type: 'integer',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.radar.datasets.download(body);
};

export default { metadata, tool, handler };
