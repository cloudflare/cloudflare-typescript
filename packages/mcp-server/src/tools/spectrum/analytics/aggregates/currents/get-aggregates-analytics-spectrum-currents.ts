// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'spectrum.analytics.aggregates.currents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/spectrum/analytics/aggregate/current',
  operationId: 'spectrum-aggregate-analytics-get-current-aggregated-analytics',
};

export const tool: Tool = {
  name: 'get_aggregates_analytics_spectrum_currents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves analytics aggregated from the last minute of usage on Spectrum applications underneath a given zone.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/current_get_response',\n  $defs: {\n    current_get_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          appID: {\n            type: 'string',\n            description: 'Application identifier.'\n          },\n          bytesEgress: {\n            type: 'number',\n            description: 'Number of bytes sent'\n          },\n          bytesIngress: {\n            type: 'number',\n            description: 'Number of bytes received'\n          },\n          connections: {\n            type: 'number',\n            description: 'Number of connections'\n          },\n          durationAvg: {\n            type: 'number',\n            description: 'Average duration of connections'\n          }\n        },\n        required: [          'appID',\n          'bytesEgress',\n          'bytesIngress',\n          'connections',\n          'durationAvg'\n        ]\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      appID: {
        type: 'string',
        description:
          'Comma-delimited list of Spectrum Application Id(s). If provided, the response will be limited to Spectrum Application Id(s) that match.',
      },
      colo_name: {
        type: 'string',
        description: 'Co-location identifier.',
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.spectrum.analytics.aggregates.currents.get(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
