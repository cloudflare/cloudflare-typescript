// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.operations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'bulk_create_api_gateway_operations',
  description:
    'Add one or more operations to a zone. Endpoints can contain path variables. Host, method, endpoint will be normalized to a canoncial form when creating an operation and must be unique on the zone. Inserting an operation that matches an existing one will return the record of the already existing operation and update its last_updated date.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            endpoint: {
              type: 'string',
              description:
                'The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-normalized upon insertion. See: https://developers.cloudflare.com/rules/normalization/how-it-works/.',
            },
            host: {
              type: 'string',
              description: 'RFC3986-compliant host.',
            },
            method: {
              type: 'string',
              description: 'The HTTP method used to access the endpoint.',
              enum: ['GET', 'POST', 'HEAD', 'OPTIONS', 'PUT', 'DELETE', 'CONNECT', 'PATCH', 'TRACE'],
            },
          },
          required: ['endpoint', 'host', 'method'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.apiGateway.operations.bulkCreate(body);
};

export default { metadata, tool, handler };
