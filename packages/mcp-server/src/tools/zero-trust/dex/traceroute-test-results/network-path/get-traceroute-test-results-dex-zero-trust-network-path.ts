// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.traceroute_test_results.network_path',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_traceroute_test_results_dex_zero_trust_network_path',
  description: 'Get a breakdown of hops and performance metrics for a specific traceroute test run',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      test_result_id: {
        type: 'string',
        description: 'API Resource UUID tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { test_result_id, ...body } = args;
  return client.zeroTrust.dex.tracerouteTestResults.networkPath.get(test_result_id, body);
};

export default { metadata, tool, handler };
