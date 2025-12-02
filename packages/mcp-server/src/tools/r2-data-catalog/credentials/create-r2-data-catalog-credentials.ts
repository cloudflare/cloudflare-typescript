// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2_data_catalog.credentials',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/r2-catalog/{bucket_name}/credential',
  operationId: 'store-credentials',
};

export const tool: Tool = {
  name: 'create_r2_data_catalog_credentials',
  description:
    'Store authentication credentials for a catalog. These credentials are used\nto authenticate with R2 storage when performing catalog operations.\n',
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
      token: {
        type: 'string',
        description: 'Provides the Cloudflare API token for accessing R2.',
      },
    },
    required: ['account_id', 'bucket_name', 'token'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bucket_name, ...body } = args as any;
  return asTextContentResult((await client.r2DataCatalog.credentials.create(bucket_name, body)) as object);
};

export default { metadata, tool, handler };
