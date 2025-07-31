// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bgp.hijacks.events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bgp/hijacks/events',
  operationId: 'radar-get-bgp-hijacks-events',
};

export const tool: Tool = {
  name: 'list_hijacks_bgp_radar_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the BGP hijack events.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        asn_info: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              asn: {\n                type: 'integer'\n              },\n              country_code: {\n                type: 'string'\n              },\n              org_name: {\n                type: 'string'\n              }\n            },\n            required: [              'asn',\n              'country_code',\n              'org_name'\n            ]\n          }\n        },\n        events: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              confidence_score: {\n                type: 'integer'\n              },\n              duration: {\n                type: 'integer'\n              },\n              event_type: {\n                type: 'integer'\n              },\n              hijack_msgs_count: {\n                type: 'integer'\n              },\n              hijacker_asn: {\n                type: 'integer'\n              },\n              hijacker_country: {\n                type: 'string'\n              },\n              is_stale: {\n                type: 'boolean'\n              },\n              max_hijack_ts: {\n                type: 'string'\n              },\n              max_msg_ts: {\n                type: 'string'\n              },\n              min_hijack_ts: {\n                type: 'string'\n              },\n              on_going_count: {\n                type: 'integer'\n              },\n              peer_asns: {\n                type: 'array',\n                items: {\n                  type: 'integer'\n                }\n              },\n              peer_ip_count: {\n                type: 'integer'\n              },\n              prefixes: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              },\n              tags: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    name: {\n                      type: 'string'\n                    },\n                    score: {\n                      type: 'integer'\n                    }\n                  },\n                  required: [                    'name',\n                    'score'\n                  ]\n                }\n              },\n              victim_asns: {\n                type: 'array',\n                items: {\n                  type: 'integer'\n                }\n              },\n              victim_countries: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              }\n            },\n            required: [              'id',\n              'confidence_score',\n              'duration',\n              'event_type',\n              'hijack_msgs_count',\n              'hijacker_asn',\n              'hijacker_country',\n              'is_stale',\n              'max_hijack_ts',\n              'max_msg_ts',\n              'min_hijack_ts',\n              'on_going_count',\n              'peer_asns',\n              'peer_ip_count',\n              'prefixes',\n              'tags',\n              'victim_asns',\n              'victim_countries'\n            ]\n          }\n        },\n        total_monitors: {\n          type: 'integer'\n        }\n      },\n      required: [        'asn_info',\n        'events',\n        'total_monitors'\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer'\n        },\n        page: {\n          type: 'integer'\n        },\n        per_page: {\n          type: 'integer'\n        },\n        total_count: {\n          type: 'integer'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'result_info',\n    'success'\n  ]\n}\n```",
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
      hijackerAsn: {
        type: 'integer',
        description: 'The potential hijacker AS of a BGP hijack event.',
      },
      involvedAsn: {
        type: 'integer',
        description: 'The potential hijacker or victim AS of a BGP hijack event.',
      },
      involvedCountry: {
        type: 'string',
        description: 'The country code of the potential hijacker or victim AS of a BGP hijack event.',
      },
      maxConfidence: {
        type: 'integer',
        description: 'Filters events by maximum confidence score (1-4 low, 5-7 mid, 8+ high).',
      },
      minConfidence: {
        type: 'integer',
        description: 'Filters events by minimum confidence score (1-4 low, 5-7 mid, 8+ high).',
      },
      page: {
        type: 'integer',
        description: 'Current page number, starting from 1.',
      },
      per_page: {
        type: 'integer',
        description: 'Number of entries per page.',
      },
      prefix: {
        type: 'string',
        description: 'Network prefix, IPv4 or IPv6.',
      },
      sortBy: {
        type: 'string',
        description: 'Sorts results by the specified field.',
        enum: ['ID', 'TIME', 'CONFIDENCE'],
      },
      sortOrder: {
        type: 'string',
        description: 'Sort order.',
        enum: ['ASC', 'DESC'],
      },
      victimAsn: {
        type: 'integer',
        description: 'The potential victim AS of a BGP hijack event.',
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
  const response = await client.radar.bgp.hijacks.events.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
