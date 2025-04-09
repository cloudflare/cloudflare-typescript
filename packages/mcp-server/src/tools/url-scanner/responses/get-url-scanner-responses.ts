// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_scanner.responses',
  operation: 'read',
  tags: [],
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

export const handler = (client: Cloudflare, args: any) => {
  const { response_id, ...body } = args;
  return client.urlScanner.responses.get(response_id, body);
};

export default { metadata, tool, handler };
