// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.traffic_anomalies.locations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/traffic_anomalies/locations',
  operationId: 'radar-get-traffic-anomalies-top',
};

export const tool: Tool = {
  name: 'get_traffic_anomalies_radar_locations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the sum of Internet traffic anomalies, grouped by location. These anomalies are signals that might indicate an outage, automatically detected by Radar and manually verified by our team.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        trafficAnomalies: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              clientCountryAlpha2: {\n                type: 'string'\n              },\n              clientCountryName: {\n                type: 'string'\n              },\n              value: {\n                type: 'string',\n                description: 'A numeric string.'\n              }\n            },\n            required: [              'clientCountryAlpha2',\n              'clientCountryName',\n              'value'\n            ]\n          }\n        }\n      },\n      required: [        'trafficAnomalies'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.radar.trafficAnomalies.locations.get(body)),
  );
};

export default { metadata, tool, handler };
