// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists.bulk_operations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_lists_rules_bulk_operations',
  description:
    'Gets the current status of an asynchronous operation on a list.\n\nThe `status` property can have one of the following values: `pending`, `running`, `completed`, or `failed`. If the status is `failed`, the `error` property will contain a message describing the error.',
  inputSchema: {
    type: 'object',
    properties: {
      account_identifier: {
        type: 'string',
        description: 'Identifier',
      },
      operation_id: {
        type: 'string',
        description: 'The unique operation ID of the asynchronous action.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { operation_id, ...body } = args;
  return client.rules.lists.bulkOperations.get(operation_id, body);
};

export default { metadata, tool, handler };
