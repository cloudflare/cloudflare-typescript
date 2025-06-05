// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.message',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cloudforce-one/requests/{request_id}/message/new',
  operationId: 'cloudforce-one-request-message-new',
};

export const tool: Tool = {
  name: 'create_requests_cloudforce_one_message',
  description: 'Create a New Request Message',
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
      content: {
        type: 'string',
        description: 'Content of message.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { request_id, ...body } = args as any;
  return asTextContentResult(await client.cloudforceOne.requests.message.create(request_id, body));
};

export default { metadata, tool, handler };
