// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.entities.locations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/entities/locations',
  operationId: 'radar-get-entities-locations',
};

export const tool: Tool = {
  name: 'list_entities_radar_locations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of locations.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        locations: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              alpha2: {\n                type: 'string'\n              },\n              latitude: {\n                type: 'string',\n                description: 'A numeric string.'\n              },\n              longitude: {\n                type: 'string',\n                description: 'A numeric string.'\n              },\n              name: {\n                type: 'string'\n              }\n            },\n            required: [              'alpha2',\n              'latitude',\n              'longitude',\n              'name'\n            ]\n          }\n        }\n      },\n      required: [        'locations'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      location: {
        type: 'string',
        description: 'Filters results by location. Specify a comma-separated list of alpha-2 location codes.',
      },
      offset: {
        type: 'integer',
        description: 'Skips the specified number of objects before fetching the results.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.radar.entities.locations.list(body)));
};

export default { metadata, tool, handler };
