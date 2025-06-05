// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.traceroute_tests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/traceroute-tests/{test_id}/network-path',
  operationId: 'dex-endpoints-traceroute-test-network-path',
};

export const tool: Tool = {
  name: 'network_path_dex_zero_trust_traceroute_tests',
  description: 'Get a breakdown of metrics by hop for individual traceroute test runs',
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
      deviceId: {
        type: 'string',
        description: 'Device to filter tracroute result runs to',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { test_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.dex.tracerouteTests.networkPath(test_id, body));
};

export default { metadata, tool, handler };
