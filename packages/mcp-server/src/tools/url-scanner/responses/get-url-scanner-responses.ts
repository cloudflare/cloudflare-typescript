// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_scanner.responses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/urlscanner/v2/responses/{response_id}',
  operationId: 'urlscanner-get-response-v2',
};

export const tool: Tool = {
  name: 'get_url_scanner_responses',
  description:
    'Returns the raw response of the network request. Find the `response_id` in the `data.requests.response.hash`.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      response_id: {
        type: 'string',
        description: 'Response hash.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { response_id, ...body } = args as any;
  return asTextContentResult(await client.urlScanner.responses.get(response_id, body));
};

export default { metadata, tool, handler };
