// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines.sinks',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/pipelines/v1/sinks/{sink_id}',
  operationId: 'deleteV4AccountsByAccount_idPipelinesV1SinksBySink_id',
};

export const tool: Tool = {
  name: 'delete_pipelines_sinks',
  description: 'Delete Pipeline in Account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      sink_id: {
        type: 'string',
        description: 'Specifies the publid ID of the sink.',
      },
      force: {
        type: 'string',
        description: 'Delete sink forcefully, including deleting any dependent pipelines.',
      },
    },
    required: ['account_id', 'sink_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { sink_id, ...body } = args as any;
  const response = await client.pipelines.sinks.delete(sink_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
