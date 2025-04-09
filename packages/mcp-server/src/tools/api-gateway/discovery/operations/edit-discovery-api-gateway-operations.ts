// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.discovery.operations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_discovery_api_gateway_operations',
  description: 'Update the `state` on a discovered operation',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      operation_id: {
        type: 'string',
        description: 'UUID.',
      },
      state: {
        type: 'string',
        description:
          'Mark state of operation in API Discovery\n  * `review` - Mark operation as for review\n  * `ignored` - Mark operation as ignored',
        enum: ['review', 'ignored'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { operation_id, ...body } = args;
  return client.apiGateway.discovery.operations.edit(operation_id, body);
};

export default { metadata, tool, handler };
