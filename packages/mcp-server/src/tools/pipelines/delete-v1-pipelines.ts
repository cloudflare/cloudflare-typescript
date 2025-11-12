// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/pipelines/v1/pipelines/{pipeline_id}',
  operationId: 'deleteV4AccountsByAccount_idPipelinesV1PipelinesByPipeline_id',
};

export const tool: Tool = {
  name: 'delete_v1_pipelines',
  description: 'Delete Pipeline in Account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      pipeline_id: {
        type: 'string',
        description: 'Specifies the public ID of the pipeline.',
      },
    },
    required: ['account_id', 'pipeline_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pipeline_id, ...body } = args as any;
  const response = await client.pipelines.deleteV1(pipeline_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
