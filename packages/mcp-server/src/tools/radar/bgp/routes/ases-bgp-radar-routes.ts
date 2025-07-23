// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.routes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bgp/routes/ases',
  operationId: 'radar-get-bgp-routes-asns',
};

export const tool: Tool = {
  name: 'ases_bgp_radar_routes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves all ASes in the current global routing tables with routing statistics.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        asns: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              asn: {\n                type: 'integer'\n              },\n              coneSize: {\n                type: 'integer',\n                description: 'AS\\'s customer cone size.'\n              },\n              country: {\n                type: 'string',\n                description: 'Alpha-2 code for the AS\\'s registration country.'\n              },\n              ipv4Count: {\n                type: 'integer',\n                description: 'Number of IPv4 addresses originated by the AS.'\n              },\n              ipv6Count: {\n                type: 'string',\n                description: 'Number of IPv6 addresses originated by the AS.'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the AS.'\n              },\n              pfxsCount: {\n                type: 'integer',\n                description: 'Number of total IP prefixes originated by the AS.'\n              },\n              rpkiInvalid: {\n                type: 'integer',\n                description: 'Number of RPKI invalid prefixes originated by the AS.'\n              },\n              rpkiUnknown: {\n                type: 'integer',\n                description: 'Number of RPKI unknown prefixes originated by the AS.'\n              },\n              rpkiValid: {\n                type: 'integer',\n                description: 'Number of RPKI valid prefixes originated by the AS.'\n              }\n            },\n            required: [              'asn',\n              'coneSize',\n              'country',\n              'ipv4Count',\n              'ipv6Count',\n              'name',\n              'pfxsCount',\n              'rpkiInvalid',\n              'rpkiUnknown',\n              'rpkiValid'\n            ]\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            dataTime: {\n              type: 'string',\n              description: 'The timestamp of when the data is generated.'\n            },\n            queryTime: {\n              type: 'string',\n              description: 'The timestamp of the query.'\n            },\n            totalPeers: {\n              type: 'integer',\n              description: 'Total number of route collector peers used to generate this data.'\n            }\n          },\n          required: [            'dataTime',\n            'queryTime',\n            'totalPeers'\n          ]\n        }\n      },\n      required: [        'asns',\n        'meta'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
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
        description: 'Filters results by location. Specify an alpha-2 location code.',
      },
      sortBy: {
        type: 'string',
        description: 'Sorts results by the specified field.',
        enum: ['cone', 'pfxs', 'ipv4', 'ipv6', 'rpki_valid', 'rpki_invalid', 'rpki_unknown'],
      },
      sortOrder: {
        type: 'string',
        description: 'Sort order.',
        enum: ['ASC', 'DESC'],
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
  return asTextContentResult(await maybeFilter(args, await client.radar.bgp.routes.ases(body)));
};

export default { metadata, tool, handler };
