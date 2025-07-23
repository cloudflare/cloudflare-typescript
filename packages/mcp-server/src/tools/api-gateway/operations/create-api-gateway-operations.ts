// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.operations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/api_gateway/operations/item',
  operationId: 'api-shield-endpoint-management-add-operation-to-a-zone',
};

export const tool: Tool = {
  name: 'create_api_gateway_operations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd one operation to a zone. Endpoints can contain path variables. Host, method, endpoint will be normalized to a canoncial form when creating an operation and must be unique on the zone. Inserting an operation that matches an existing one will return the record of the already existing operation and update its last_updated date.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
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
    required: ['zone_id', 'endpoint', 'host', 'method'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.apiGateway.operations.create(body));
};

export default { metadata, tool, handler };
