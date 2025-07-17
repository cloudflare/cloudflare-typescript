// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.tests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/tests/overview',
  operationId: 'dex-endpoints-list-tests-overview',
};

export const tool: Tool = {
  name: 'list_dex_zero_trust_tests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList DEX tests with overview metrics",
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
    required: ['account_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zeroTrust.dex.tests.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
