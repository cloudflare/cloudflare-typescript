// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines.streams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pipelines/v1/streams/{stream_id}',
  operationId: 'getV4AccountsByAccount_idPipelinesV1StreamsByStream_id',
};

export const tool: Tool = {
  name: 'get_pipelines_streams',
  description: 'Get Stream Details.',
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
    },
    required: ['account_id', 'stream_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { stream_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.pipelines.streams.get(stream_id, body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
