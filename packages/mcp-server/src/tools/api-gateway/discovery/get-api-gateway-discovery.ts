// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the most up to date view of discovered operations, rendered as OpenAPI schemas\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/discovery_get_response',\n  $defs: {\n    discovery_get_response: {\n      type: 'object',\n      properties: {\n        schemas: {\n          type: 'array',\n          items: {\n            type: 'object',\n            description: 'A OpenAPI 3.0.0 compliant schema.',\n            additionalProperties: true\n          }\n        },\n        timestamp: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'schemas',\n        'timestamp'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.apiGateway.discovery.get(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
