// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.operations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/api_gateway/operations',
  operationId: 'api-shield-endpoint-management-retrieve-information-about-all-operations-on-a-zone',
};

export const tool: Tool = {
  name: 'list_api_gateway_operations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve information about all operations on a zone",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      direction: {
        type: 'string',
        description: 'Direction to order results.',
        enum: ['asc', 'desc'],
      },
      endpoint: {
        type: 'string',
        description: 'Filter results to only include endpoints containing this pattern.',
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
        description: 'Filter results to only include the specified hosts.',
        items: {
          type: 'string',
        },
      },
      method: {
        type: 'array',
        description: 'Filter results to only include the specified HTTP methods.',
        items: {
          type: 'string',
        },
      },
      order: {
        type: 'string',
        description:
          'Field to order by. When requesting a feature, the feature keys are available for ordering as well, e.g., `thresholds.suggested_threshold`.',
        enum: ['method', 'host', 'endpoint', 'thresholds.$key'],
      },
      page: {
        type: 'integer',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'integer',
        description: 'Maximum number of results per page.',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.apiGateway.operations.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
