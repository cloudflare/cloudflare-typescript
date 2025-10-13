// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.geolocations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/geolocations',
  operationId: 'radar-get-geolocations',
};

export const tool: Tool = {
  name: 'list_radar_geolocations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of geolocations.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        geolocations: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              geoId: {\n                type: 'string'\n              },\n              latitude: {\n                type: 'string',\n                description: 'A numeric string.'\n              },\n              longitude: {\n                type: 'string',\n                description: 'A numeric string.'\n              },\n              name: {\n                type: 'string'\n              },\n              parent: {\n                type: 'object',\n                properties: {\n                  geoId: {\n                    type: 'string'\n                  },\n                  latitude: {\n                    type: 'string',\n                    description: 'A numeric string.'\n                  },\n                  longitude: {\n                    type: 'string',\n                    description: 'A numeric string.'\n                  },\n                  name: {\n                    type: 'string'\n                  },\n                  parent: {\n                    type: 'object',\n                    properties: {\n                      geoId: {\n                        type: 'string'\n                      },\n                      latitude: {\n                        type: 'string',\n                        description: 'A numeric string.'\n                      },\n                      longitude: {\n                        type: 'string',\n                        description: 'A numeric string.'\n                      },\n                      name: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        description: 'The type of the geolocation.',\n                        enum: [                          'CONTINENT',\n                          'COUNTRY',\n                          'ADM1'\n                        ]\n                      }\n                    },\n                    required: [                      'geoId',\n                      'latitude',\n                      'longitude',\n                      'name',\n                      'type'\n                    ]\n                  },\n                  type: {\n                    type: 'string',\n                    description: 'The type of the geolocation.',\n                    enum: [                      'CONTINENT',\n                      'COUNTRY',\n                      'ADM1'\n                    ]\n                  }\n                },\n                required: [                  'geoId',\n                  'latitude',\n                  'longitude',\n                  'name',\n                  'parent',\n                  'type'\n                ]\n              },\n              type: {\n                type: 'string',\n                description: 'The type of the geolocation.',\n                enum: [                  'CONTINENT',\n                  'COUNTRY',\n                  'ADM1'\n                ]\n              }\n            },\n            required: [              'geoId',\n              'latitude',\n              'longitude',\n              'name',\n              'parent',\n              'type'\n            ]\n          }\n        }\n      },\n      required: [        'geolocations'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      geoId: {
        type: 'string',
        description: 'Filters results by geolocation. Specify a comma-separated list of GeoNames IDs.',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.radar.geolocations.list(body)));
};

export default { metadata, tool, handler };
