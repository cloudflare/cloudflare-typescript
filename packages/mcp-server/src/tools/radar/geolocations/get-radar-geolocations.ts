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
  httpPath: '/radar/geolocations/{geo_id}',
  operationId: 'radar-get-geolocation-details',
};

export const tool: Tool = {
  name: 'get_radar_geolocations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the requested Geolocation information.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        geolocation: {\n          type: 'object',\n          properties: {\n            geoId: {\n              type: 'string'\n            },\n            latitude: {\n              type: 'string',\n              description: 'A numeric string.'\n            },\n            longitude: {\n              type: 'string',\n              description: 'A numeric string.'\n            },\n            name: {\n              type: 'string'\n            },\n            parent: {\n              type: 'object',\n              properties: {\n                geoId: {\n                  type: 'string'\n                },\n                latitude: {\n                  type: 'string',\n                  description: 'A numeric string.'\n                },\n                longitude: {\n                  type: 'string',\n                  description: 'A numeric string.'\n                },\n                name: {\n                  type: 'string'\n                },\n                parent: {\n                  type: 'object',\n                  properties: {\n                    geoId: {\n                      type: 'string'\n                    },\n                    latitude: {\n                      type: 'string',\n                      description: 'A numeric string.'\n                    },\n                    longitude: {\n                      type: 'string',\n                      description: 'A numeric string.'\n                    },\n                    name: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      description: 'The type of the geolocation.',\n                      enum: [                        'CONTINENT',\n                        'COUNTRY',\n                        'ADM1'\n                      ]\n                    }\n                  },\n                  required: [                    'geoId',\n                    'latitude',\n                    'longitude',\n                    'name',\n                    'type'\n                  ]\n                },\n                type: {\n                  type: 'string',\n                  description: 'The type of the geolocation.',\n                  enum: [                    'CONTINENT',\n                    'COUNTRY',\n                    'ADM1'\n                  ]\n                }\n              },\n              required: [                'geoId',\n                'latitude',\n                'longitude',\n                'name',\n                'parent',\n                'type'\n              ]\n            },\n            type: {\n              type: 'string',\n              description: 'The type of the geolocation.',\n              enum: [                'CONTINENT',\n                'COUNTRY',\n                'ADM1'\n              ]\n            }\n          },\n          required: [            'geoId',\n            'latitude',\n            'longitude',\n            'name',\n            'parent',\n            'type'\n          ]\n        }\n      },\n      required: [        'geolocation'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      geo_id: {
        type: 'string',
        description:
          'Geolocation ID. Refer to [GeoNames](https://download.geonames.org/export/dump/readme.txt)',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['geo_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { geo_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.radar.geolocations.get(geo_id, body)));
};

export default { metadata, tool, handler };
