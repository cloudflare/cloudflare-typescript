// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.entities.asns',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/entities/asns/{asn}',
  operationId: 'radar-get-entities-asn-by-id',
};

export const tool: Tool = {
  name: 'get_entities_radar_asns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the requested autonomous system information. (A confidence level below `5` indicates a low level of confidence in the traffic data - normally this happens because Cloudflare has a small amount of traffic from/to this AS). Population estimates come from APNIC (refer to https://labs.apnic.net/?p=526).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        asn: {\n          type: 'object',\n          properties: {\n            asn: {\n              type: 'integer'\n            },\n            confidenceLevel: {\n              type: 'integer'\n            },\n            country: {\n              type: 'string'\n            },\n            countryName: {\n              type: 'string'\n            },\n            estimatedUsers: {\n              type: 'object',\n              properties: {\n                locations: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      locationAlpha2: {\n                        type: 'string'\n                      },\n                      locationName: {\n                        type: 'string'\n                      },\n                      estimatedUsers: {\n                        type: 'integer',\n                        description: 'Estimated users per location.'\n                      }\n                    },\n                    required: [                      'locationAlpha2',\n                      'locationName'\n                    ]\n                  }\n                },\n                estimatedUsers: {\n                  type: 'integer',\n                  description: 'Total estimated users.'\n                }\n              },\n              required: [                'locations'\n              ]\n            },\n            name: {\n              type: 'string'\n            },\n            orgName: {\n              type: 'string'\n            },\n            related: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  asn: {\n                    type: 'integer'\n                  },\n                  name: {\n                    type: 'string'\n                  },\n                  aka: {\n                    type: 'string'\n                  },\n                  estimatedUsers: {\n                    type: 'integer',\n                    description: 'Total estimated users.'\n                  }\n                },\n                required: [                  'asn',\n                  'name'\n                ]\n              }\n            },\n            source: {\n              type: 'string',\n              description: 'Regional Internet Registry.'\n            },\n            website: {\n              type: 'string'\n            },\n            aka: {\n              type: 'string'\n            }\n          },\n          required: [            'asn',\n            'confidenceLevel',\n            'country',\n            'countryName',\n            'estimatedUsers',\n            'name',\n            'orgName',\n            'related',\n            'source',\n            'website'\n          ]\n        }\n      },\n      required: [        'asn'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'integer',
        description: 'Single Autonomous System Number (ASN) as integer.',
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
    required: ['asn'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { asn, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.radar.entities.asns.get(asn, body)));
};

export default { metadata, tool, handler };
