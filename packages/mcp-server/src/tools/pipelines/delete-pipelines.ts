// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/pipelines/{pipeline_name}',
  operationId: 'deleteV4AccountsByAccount_idPipelinesByPipeline_name',
};

export const tool: Tool = {
  name: 'delete_pipelines',
  description: 'Delete a pipeline.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      pipeline_name: {
        type: 'string',
        description: 'Defines the name of the pipeline.',
      },
    },
    required: ['account_id', 'pipeline_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pipeline_name, ...body } = args as any;
  const response = await client.pipelines.delete(pipeline_name, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
