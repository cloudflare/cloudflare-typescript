// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.tests.unique_devices',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_tests_dex_zero_trust_unique_devices',
  description:
    'Returns unique count of devices that have run synthetic application monitoring tests in the past 7 days.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      deviceId: {
        type: 'array',
        description:
          'Optionally filter result stats to a specific device(s). Cannot be used in combination with colo param.',
        items: {
          type: 'string',
        },
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
  return client.zeroTrust.dex.tests.uniqueDevices.list(body);
};

export default { metadata, tool, handler };
