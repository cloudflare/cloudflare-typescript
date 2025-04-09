// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.message',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_requests_cloudforce_one_message',
  description: 'Update a Request Message',
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
      message_identifer: {
        type: 'integer',
      },
      content: {
        type: 'string',
        description: 'Content of message',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { message_identifer, ...body } = args;
  return client.cloudforceOne.requests.message.update(message_identifer, body);
};

export default { metadata, tool, handler };
