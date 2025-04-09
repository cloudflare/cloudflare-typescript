// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'speed.pages.tests',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_pages_speed_tests',
  description: 'Starts a test for a specific webpage, in a specific region.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      url: {
        type: 'string',
        description: 'A URL.',
      },
      region: {
        type: 'string',
        description: 'A test region.',
        enum: [
          'asia-east1',
          'asia-northeast1',
          'asia-northeast2',
          'asia-south1',
          'asia-southeast1',
          'australia-southeast1',
          'europe-north1',
          'europe-southwest1',
          'europe-west1',
          'europe-west2',
          'europe-west3',
          'europe-west4',
          'europe-west8',
          'europe-west9',
          'me-west1',
          'southamerica-east1',
          'us-central1',
          'us-east1',
          'us-east4',
          'us-south1',
          'us-west1',
        ],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { url, ...body } = args;
  return client.speed.pages.tests.create(url, body);
};

export default { metadata, tool, handler };
