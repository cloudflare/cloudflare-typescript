// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_cloudforce_one_requests',
  description: 'Get a Request',
  inputSchema: {
    type: 'object',
    properties: {
      account_identifier: {
        type: 'string',
        description: 'Identifier',
      },
      request_identifier: {
        type: 'string',
        description: 'UUID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { request_identifier, ...body } = args;
  return client.cloudforceOne.requests.get(request_identifier, body);
};

export default { metadata, tool, handler };
