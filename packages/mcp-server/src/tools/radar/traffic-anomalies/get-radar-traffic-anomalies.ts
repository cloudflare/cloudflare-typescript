// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.traffic_anomalies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/traffic_anomalies',
  operationId: 'radar-get-traffic-anomalies',
};

export const tool: Tool = {
  name: 'get_radar_traffic_anomalies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the latest Internet traffic anomalies, which are signals that might indicate an outage. These alerts are automatically detected by Radar and manually verified by our team.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        trafficAnomalies: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              startDate: {\n                type: 'string'\n              },\n              status: {\n                type: 'string'\n              },\n              type: {\n                type: 'string'\n              },\n              uuid: {\n                type: 'string'\n              },\n              asnDetails: {\n                type: 'object',\n                properties: {\n                  asn: {\n                    type: 'string'\n                  },\n                  name: {\n                    type: 'string'\n                  },\n                  locations: {\n                    type: 'object',\n                    properties: {\n                      code: {\n                        type: 'string'\n                      },\n                      name: {\n                        type: 'string'\n                      }\n                    },\n                    required: [                      'code',\n                      'name'\n                    ]\n                  }\n                },\n                required: [                  'asn',\n                  'name'\n                ]\n              },\n              endDate: {\n                type: 'string',\n                format: 'date-time'\n              },\n              locationDetails: {\n                type: 'object',\n                properties: {\n                  code: {\n                    type: 'string'\n                  },\n                  name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'code',\n                  'name'\n                ]\n              },\n              visibleInDataSources: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              }\n            },\n            required: [              'startDate',\n              'status',\n              'type',\n              'uuid'\n            ]\n          }\n        }\n      },\n      required: [        'trafficAnomalies'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'integer',
        description:
          'Filters results by Autonomous System. Specify a single Autonomous System Number (ASN) as integer.',
      },
      dateEnd: {
        type: 'string',
        description: 'End of the date range (inclusive).',
        format: 'date-time',
      },
      dateRange: {
        type: 'string',
        description: 'Filters results by date range.',
      },
      dateStart: {
        type: 'string',
        description: 'Start of the date range (inclusive).',
        format: 'date-time',
      },
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
        description: 'Filters results by location. Specify an alpha-2 location code.',
      },
      offset: {
        type: 'integer',
        description: 'Skips the specified number of objects before fetching the results.',
      },
      status: {
        type: 'string',
        enum: ['VERIFIED', 'UNVERIFIED'],
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.radar.trafficAnomalies.get(body)));
};

export default { metadata, tool, handler };
