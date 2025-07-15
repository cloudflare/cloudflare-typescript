// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.operations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/api_gateway/operations/{operation_id}',
  operationId: 'api-shield-endpoint-management-retrieve-information-about-an-operation',
};

export const tool: Tool = {
  name: 'get_api_gateway_operations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve information about an operation",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      operation_id: {
        type: 'string',
        description: 'UUID.',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { operation_id, ...body } = args as any;
  return asTextContentResult(await client.apiGateway.operations.get(operation_id, body));
};

export default { metadata, tool, handler };
