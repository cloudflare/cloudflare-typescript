// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.traceroute_tests',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_dex_zero_trust_traceroute_tests',
  description:
    'Get test details and aggregate performance metrics for an traceroute test for a given time period between 1 hour and 7 days.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      test_id: {
        type: 'string',
        description: 'API Resource UUID tag.',
      },
      from: {
        type: 'string',
        description: 'Start time for aggregate metrics in ISO ms',
      },
      interval: {
        type: 'string',
        description: 'Time interval for aggregate time slots.',
        enum: ['minute', 'hour'],
      },
      to: {
        type: 'string',
        description: 'End time for aggregate metrics in ISO ms',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { test_id, ...body } = args;
  return client.zeroTrust.dex.tracerouteTests.get(test_id, body);
};

export default { metadata, tool, handler };
