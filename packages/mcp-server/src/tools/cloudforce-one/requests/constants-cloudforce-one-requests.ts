// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/requests/constants',
  operationId: 'cloudforce-one-request-constants',
};

export const tool: Tool = {
  name: 'constants_cloudforce_one_requests',
  description: 'Get Request Priority, Status, and TLP constants',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.cloudforceOne.requests.constants(body);
};

export default { metadata, tool, handler };
