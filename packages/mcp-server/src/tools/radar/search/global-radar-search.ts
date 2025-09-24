// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.search',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/search/global',
  operationId: 'radar-get-search-global',
};

export const tool: Tool = {
  name: 'global_radar_search',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearches for locations, autonomous systems, reports, bots, certificate logs, certificate authorities, industries and verticals\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        search: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              code: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              type: {\n                type: 'string'\n              }\n            },\n            required: [              'code',\n              'name',\n              'type'\n            ]\n          }\n        }\n      },\n      required: [        'search'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'String used to perform the search operation.',
      },
      exclude: {
        type: 'array',
        description: 'Search types excluded from results.',
        items: {
          type: 'string',
          enum: [
            'ADM1S',
            'ASNS',
            'BOTS',
            'CERTIFICATE_AUTHORITIES',
            'CERTIFICATE_LOGS',
            'INDUSTRIES',
            'LOCATIONS',
            'NOTEBOOKS',
            'TLDS',
            'VERTICALS',
          ],
        },
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      include: {
        type: 'array',
        description: 'Search types included in results.',
        items: {
          type: 'string',
          enum: [
            'ADM1S',
            'ASNS',
            'BOTS',
            'CERTIFICATE_AUTHORITIES',
            'CERTIFICATE_LOGS',
            'INDUSTRIES',
            'LOCATIONS',
            'NOTEBOOKS',
            'TLDS',
            'VERTICALS',
          ],
        },
      },
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      limitPerGroup: {
        type: 'number',
        description: 'Limits the number of objects per search category.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['query'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.radar.search.global(body)));
};

export default { metadata, tool, handler };
