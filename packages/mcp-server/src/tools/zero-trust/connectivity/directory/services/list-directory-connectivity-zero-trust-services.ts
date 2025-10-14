// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.connectivity.directory.services',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/connectivity/directory/services',
  operationId: 'iris-connectivity-services-list',
};

export const tool: Tool = {
  name: 'list_directory_connectivity_zero_trust_services',
  description: 'List connectivity services',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account identifier',
      },
      page: {
        type: 'integer',
        description: 'Current page in the response',
      },
      per_page: {
        type: 'integer',
        description: 'Max amount of entries returned per page',
      },
      type: {
        type: 'string',
        enum: ['http'],
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
  const response = await client.zeroTrust.connectivity.directory.services.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
