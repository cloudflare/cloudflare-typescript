// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines.sinks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pipelines/v1/sinks',
  operationId: 'getV4AccountsByAccount_idPipelinesV1Sinks',
};

export const tool: Tool = {
  name: 'list_pipelines_sinks',
  description: 'List/Filter Sinks in Account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      page: {
        type: 'number',
      },
      per_page: {
        type: 'number',
      },
      pipeline_id: {
        type: 'string',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.pipelines.sinks.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
