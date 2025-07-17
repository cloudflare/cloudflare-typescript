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
  httpPath: '/radar/entities/asns',
  operationId: 'radar-get-entities-asn-list',
};

export const tool: Tool = {
  name: 'list_entities_radar_asns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of autonomous systems.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        asns: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              asn: {\n                type: 'integer'\n              },\n              country: {\n                type: 'string'\n              },\n              countryName: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              aka: {\n                type: 'string'\n              },\n              orgName: {\n                type: 'string'\n              },\n              website: {\n                type: 'string'\n              }\n            },\n            required: [              'asn',\n              'country',\n              'countryName',\n              'name'\n            ]\n          }\n        }\n      },\n      required: [        'asns'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'string',
        description:
          'Filters results by Autonomous System. Specify one or more Autonomous System Numbers (ASNs) as a comma-separated list.',
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
      orderBy: {
        type: 'string',
        description: 'Specifies the metric to order the ASNs by.',
        enum: ['ASN', 'POPULATION'],
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.radar.entities.asns.list(body)));
};

export default { metadata, tool, handler };
