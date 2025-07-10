// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.leaks.events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bgp/leaks/events',
  operationId: 'radar-get-bgp-route-leak-events',
};

export const tool: Tool = {
  name: 'list_leaks_bgp_radar_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the BGP route leak events.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        asn_info: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              asn: {\n                type: 'integer'\n              },\n              country_code: {\n                type: 'string'\n              },\n              org_name: {\n                type: 'string'\n              }\n            },\n            required: [              'asn',\n              'country_code',\n              'org_name'\n            ]\n          }\n        },\n        events: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              countries: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              },\n              detected_ts: {\n                type: 'string'\n              },\n              finished: {\n                type: 'boolean'\n              },\n              leak_asn: {\n                type: 'integer'\n              },\n              leak_count: {\n                type: 'integer'\n              },\n              leak_seg: {\n                type: 'array',\n                items: {\n                  type: 'integer'\n                }\n              },\n              leak_type: {\n                type: 'integer'\n              },\n              max_ts: {\n                type: 'string'\n              },\n              min_ts: {\n                type: 'string'\n              },\n              origin_count: {\n                type: 'integer'\n              },\n              peer_count: {\n                type: 'integer'\n              },\n              prefix_count: {\n                type: 'integer'\n              }\n            },\n            required: [              'id',\n              'countries',\n              'detected_ts',\n              'finished',\n              'leak_asn',\n              'leak_count',\n              'leak_seg',\n              'leak_type',\n              'max_ts',\n              'min_ts',\n              'origin_count',\n              'peer_count',\n              'prefix_count'\n            ]\n          }\n        }\n      },\n      required: [        'asn_info',\n        'events'\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer'\n        },\n        page: {\n          type: 'integer'\n        },\n        per_page: {\n          type: 'integer'\n        },\n        total_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'result_info',\n    'success'\n  ]\n}\n```",
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
      eventId: {
        type: 'integer',
        description: 'The unique identifier of a event.',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      involvedAsn: {
        type: 'integer',
        description: 'ASN that is causing or affected by a route leak event.',
      },
      involvedCountry: {
        type: 'string',
        description: 'Country code of a involved ASN in a route leak event.',
      },
      leakAsn: {
        type: 'integer',
        description: 'The leaking AS of a route leak event.',
      },
      page: {
        type: 'integer',
        description: 'Current page number, starting from 1.',
      },
      per_page: {
        type: 'integer',
        description: 'Number of entries per page.',
      },
      sortBy: {
        type: 'string',
        description: 'Sorts results by the specified field.',
        enum: ['ID', 'LEAKS', 'PEERS', 'PREFIXES', 'ORIGINS', 'TIME'],
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.radar.bgp.leaks.events.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
