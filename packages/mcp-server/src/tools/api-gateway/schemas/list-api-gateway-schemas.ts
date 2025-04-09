// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.schemas',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_api_gateway_schemas',
  description: 'Retrieve operations and features as OpenAPI schemas',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      feature: {
        type: 'array',
        description:
          'Add feature(s) to the results. The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the specific meaning.',
        items: {
          type: 'string',
          enum: ['thresholds', 'parameter_schemas', 'schema_info'],
        },
      },
      host: {
        type: 'array',
        description: 'Receive schema only for the given host(s).',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.apiGateway.schemas.list(body);
};

export default { metadata, tool, handler };
