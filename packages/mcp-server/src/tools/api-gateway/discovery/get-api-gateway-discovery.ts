// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.discovery',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_api_gateway_discovery',
  description: 'Retrieve the most up to date view of discovered operations, rendered as OpenAPI schemas',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.apiGateway.discovery.get(body);
};

export default { metadata, tool, handler };
