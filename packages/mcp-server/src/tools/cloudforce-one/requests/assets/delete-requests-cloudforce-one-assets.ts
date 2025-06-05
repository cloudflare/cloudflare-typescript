// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.assets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}',
  operationId: 'cloudforce-one-request-asset-delete',
};

export const tool: Tool = {
  name: 'delete_requests_cloudforce_one_assets',
  description: 'Delete a Request Asset',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      request_id: {
        type: 'string',
        description: 'UUID.',
      },
      asset_id: {
        type: 'string',
        description: 'UUID.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { asset_id, ...body } = args as any;
  return asTextContentResult(await client.cloudforceOne.requests.assets.delete(asset_id, body));
};

export default { metadata, tool, handler };
