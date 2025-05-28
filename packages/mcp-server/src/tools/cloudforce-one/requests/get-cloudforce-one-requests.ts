// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/requests/{request_id}',
  operationId: 'cloudforce-one-request-get',
};

export const tool: Tool = {
  name: 'get_cloudforce_one_requests',
  description: 'Get a Request',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      request_id: {
        type: 'string',
        description: 'UUID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { request_id, ...body } = args as any;
  return client.cloudforceOne.requests.get(request_id, body);
};

export default { metadata, tool, handler };
