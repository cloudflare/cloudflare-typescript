// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.binary_storage',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/binary/{hash}',
  operationId: 'get_BinDBGetBinary',
};

export const tool: Tool = {
  name: 'get_cloudforce_one_binary_storage',
  description: 'Retrieves a file from Binary Storage',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      hash: {
        type: 'string',
        description: 'hash of the binary',
      },
    },
    required: ['account_id', 'hash'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { hash, ...body } = args as any;
  const response = await client.cloudforceOne.binaryStorage.get(hash, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
