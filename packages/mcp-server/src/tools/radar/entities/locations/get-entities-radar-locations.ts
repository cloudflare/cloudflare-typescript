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
  httpPath: '/radar/entities/locations/{location}',
  operationId: 'radar-get-entities-location-by-alpha2',
};

export const tool: Tool = {
  name: 'get_entities_radar_locations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the requested location information. (A confidence level below `5` indicates a low level of confidence in the traffic data - normally this happens because Cloudflare has a small amount of traffic from/to this location).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        location: {\n          type: 'object',\n          properties: {\n            alpha2: {\n              type: 'string'\n            },\n            confidenceLevel: {\n              type: 'integer'\n            },\n            latitude: {\n              type: 'string',\n              description: 'A numeric string.'\n            },\n            longitude: {\n              type: 'string',\n              description: 'A numeric string.'\n            },\n            name: {\n              type: 'string'\n            },\n            region: {\n              type: 'string'\n            },\n            subregion: {\n              type: 'string'\n            }\n          },\n          required: [            'alpha2',\n            'confidenceLevel',\n            'latitude',\n            'longitude',\n            'name',\n            'region',\n            'subregion'\n          ]\n        }\n      },\n      required: [        'location'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'Location alpha-2 code.',
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
    required: ['location'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { location, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.radar.entities.locations.get(location, body)),
  );
};

export default { metadata, tool, handler };
