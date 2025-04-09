// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.expression_template.fallthrough',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_expression_template_api_gateway_fallthrough',
  description: 'Generate fallthrough WAF expression template from a set of API hosts',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      hosts: {
        type: 'array',
        description: 'List of hosts to be targeted in the expression',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.apiGateway.expressionTemplate.fallthrough.create(body);
};

export default { metadata, tool, handler };
