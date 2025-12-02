// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2_data_catalog',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/r2-catalog/{bucket_name}/disable',
  operationId: 'disable-catalog',
};

export const tool: Tool = {
  name: 'disable_r2_data_catalog',
  description:
    'Disable an R2 bucket as a catalog. This operation deactivates the catalog\nbut preserves existing metadata and data files. The catalog can be\nre-enabled later.\n',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Use this to identify the account.',
      },
      bucket_name: {
        type: 'string',
        description: 'Specifies the R2 bucket name.',
      },
    },
    required: ['account_id', 'bucket_name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bucket_name, ...body } = args as any;
  const response = await client.r2DataCatalog.disable(bucket_name, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
