// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines.streams',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/pipelines/v1/streams/{stream_id}',
  operationId: 'deleteV4AccountsByAccount_idPipelinesV1StreamsByStream_id',
};

export const tool: Tool = {
  name: 'delete_pipelines_streams',
  description: 'Delete Stream in Account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      stream_id: {
        type: 'string',
        description: 'Specifies the public ID of the stream.',
      },
      force: {
        type: 'string',
        description: 'Delete stream forcefully, including deleting any dependent pipelines.',
      },
    },
    required: ['account_id', 'stream_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { stream_id, ...body } = args as any;
  const response = await client.pipelines.streams.delete(stream_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
