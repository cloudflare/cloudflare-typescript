// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.connectivity.directory.services',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/connectivity/directory/services/{service_id}',
  operationId: 'iris-connectivity-services-get',
};

export const tool: Tool = {
  name: 'get_directory_connectivity_zero_trust_services',
  description: 'Get connectivity service',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      service_id: {
        type: 'string',
      },
    },
    required: ['account_id', 'service_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { service_id, ...body } = args as any;
  const response = await client.zeroTrust.connectivity.directory.services.get(service_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
