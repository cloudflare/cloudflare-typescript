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
  httpPath: '/radar/entities/asns/{asn}/as_set',
  operationId: 'radar-get-asns-as-set',
};

export const tool: Tool = {
  name: 'as_set_entities_radar_asns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves Internet Routing Registry AS-SETs that an AS is a member of.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        as_sets: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              as_members_count: {\n                type: 'integer',\n                description: 'The number of AS members in the AS-SET'\n              },\n              as_set_members_count: {\n                type: 'integer',\n                description: 'The number of AS-SET members in the AS-SET'\n              },\n              as_set_upstreams_count: {\n                type: 'integer',\n                description: 'The number of recursive upstream AS-SETs'\n              },\n              asn_cone_size: {\n                type: 'integer',\n                description: 'The number of unique ASNs in the AS-SETs recursive downstream'\n              },\n              irr_sources: {\n                type: 'array',\n                description: 'The IRR sources of the AS-SET',\n                items: {\n                  type: 'string'\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the AS-SET'\n              },\n              asn: {\n                type: 'integer',\n                description: 'The inferred AS number of the AS-SET'\n              }\n            },\n            required: [              'as_members_count',\n              'as_set_members_count',\n              'as_set_upstreams_count',\n              'asn_cone_size',\n              'irr_sources',\n              'name'\n            ]\n          }\n        },\n        paths: {\n          type: 'array',\n          description: 'Paths from the AS-SET that include the given AS to its upstreams recursively',\n          items: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'as_sets',\n        'paths'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'integer',
        description: 'Retrieves all AS-SETs that the given AS is a member of.',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { asn, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.radar.entities.asns.asSet(asn, body)));
};

export default { metadata, tool, handler };
