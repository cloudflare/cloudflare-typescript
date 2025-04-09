// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.tests',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_dex_zero_trust_tests',
  description: 'List DEX tests with overview metrics',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      colo: {
        type: 'string',
        description:
          'Optionally filter result stats to a Cloudflare colo. Cannot be used in combination with deviceId param.',
      },
      deviceId: {
        type: 'array',
        description:
          'Optionally filter result stats to a specific device(s). Cannot be used in combination with colo param.',
        items: {
          type: 'string',
        },
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page',
      },
      testName: {
        type: 'string',
        description: 'Optionally filter results by test name',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dex.tests.list(body);
};

export default { metadata, tool, handler };
