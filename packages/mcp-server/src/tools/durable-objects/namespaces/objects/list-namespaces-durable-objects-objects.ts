// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'durable_objects.namespaces.objects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/durable_objects/namespaces/{id}/objects',
  operationId: 'durable-objects-namespace-list-objects',
};

export const tool: Tool = {
  name: 'list_namespaces_durable_objects_objects',
  description: 'Returns the Durable Objects in a given namespace.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      id: {
        type: 'string',
        description: 'ID of the namespace.',
      },
      cursor: {
        type: 'string',
        description:
          'Opaque token indicating the position from which to continue when requesting the next set of records. A valid value for the cursor can be obtained from the cursors object in the result_info structure.',
      },
      limit: {
        type: 'number',
        description:
          'The number of objects to return. The cursor attribute may be used to iterate over the next batch of objects if there are more than the limit.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.durableObjects.namespaces.objects.list(id, body));
};

export default { metadata, tool, handler };
