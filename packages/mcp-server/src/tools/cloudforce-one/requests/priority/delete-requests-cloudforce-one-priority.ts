// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.priority',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}',
  operationId: 'cloudforce-one-priority-delete',
};

export const tool: Tool = {
  name: 'delete_requests_cloudforce_one_priority',
  description: 'Delete a Priority Intelligence Requirement',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      priority_id: {
        type: 'string',
        description: 'UUID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { priority_id, ...body } = args as any;
  return client.cloudforceOne.requests.priority.delete(priority_id, body);
};

export default { metadata, tool, handler };
