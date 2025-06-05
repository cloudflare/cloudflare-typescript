// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.discovery',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/api_gateway/discovery',
  operationId: 'api-shield-api-discovery-retrieve-discovered-operations-on-a-zone-as-openapi',
};

export const tool: Tool = {
  name: 'get_api_gateway_discovery',
  description: 'Retrieve the most up to date view of discovered operations, rendered as OpenAPI schemas',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.apiGateway.discovery.get(body));
};

export default { metadata, tool, handler };
