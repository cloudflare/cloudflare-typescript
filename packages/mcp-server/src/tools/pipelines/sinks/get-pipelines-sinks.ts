// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines.sinks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pipelines/v1/sinks/{sink_id}',
  operationId: 'getV4AccountsByAccount_idPipelinesV1SinksBySink_id',
};

export const tool: Tool = {
  name: 'get_pipelines_sinks',
  description: 'Get Sink Details.',
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
    },
    required: ['account_id', 'sink_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { sink_id, ...body } = args as any;
  return asTextContentResult(await client.pipelines.sinks.get(sink_id, body));
};

export default { metadata, tool, handler };
