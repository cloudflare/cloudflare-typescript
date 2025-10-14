// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.connectivity.directory.services',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/connectivity/directory/services/{service_id}',
  operationId: 'iris-connectivity-services-put',
};

export const tool: Tool = {
  name: 'update_directory_connectivity_zero_trust_services',
  description: 'Update connectivity service',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      service_id: {
        type: 'string',
      },
      host: {
        type: 'object',
        properties: {
          hostname: {
            type: 'string',
          },
          ipv4: {
            type: 'string',
          },
          ipv6: {
            type: 'string',
          },
          network: {
            type: 'object',
            additionalProperties: true,
          },
          resolver_network: {
            type: 'object',
            additionalProperties: true,
          },
        },
      },
      name: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['http'],
      },
      http_port: {
        type: 'integer',
      },
      https_port: {
        type: 'integer',
      },
    },
    required: ['account_id', 'service_id', 'host', 'name', 'type'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { service_id, ...body } = args as any;
  const response = await client.zeroTrust.connectivity.directory.services
    .update(service_id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
