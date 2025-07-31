// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/dlp/datasets/{dataset_id}',
  operationId: 'dlp-datasets-delete',
};

export const tool: Tool = {
  name: 'delete_dlp_zero_trust_datasets',
  description: 'This deletes all versions of the dataset.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      dataset_id: {
        type: 'string',
      },
    },
    required: ['account_id', 'dataset_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { dataset_id, ...body } = args as any;
  const response = await client.zeroTrust.dlp.datasets.delete(dataset_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
