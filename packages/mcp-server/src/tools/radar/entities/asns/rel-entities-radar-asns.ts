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
  httpPath: '/radar/entities/asns/{asn}/rel',
  operationId: 'radar-get-asns-rel',
};

export const tool: Tool = {
  name: 'rel_entities_radar_asns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves AS-level relationship for given networks.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        meta: {\n          type: 'object',\n          properties: {\n            data_time: {\n              type: 'string'\n            },\n            query_time: {\n              type: 'string'\n            },\n            total_peers: {\n              type: 'integer'\n            }\n          },\n          required: [            'data_time',\n            'query_time',\n            'total_peers'\n          ]\n        },\n        rels: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              asn1: {\n                type: 'integer'\n              },\n              asn1_country: {\n                type: 'string'\n              },\n              asn1_name: {\n                type: 'string'\n              },\n              asn2: {\n                type: 'integer'\n              },\n              asn2_country: {\n                type: 'string'\n              },\n              asn2_name: {\n                type: 'string'\n              },\n              rel: {\n                type: 'string'\n              }\n            },\n            required: [              'asn1',\n              'asn1_country',\n              'asn1_name',\n              'asn2',\n              'asn2_country',\n              'asn2_name',\n              'rel'\n            ]\n          }\n        }\n      },\n      required: [        'meta',\n        'rels'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      asn: {
        type: 'integer',
        description: 'Retrieves all ASNs with provider-customer or peering relationships with the given ASN.',
      },
      asn2: {
        type: 'integer',
        description: 'Retrieves the AS relationship of ASN2 with respect to the given ASN.',
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { asn, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.radar.entities.asns.rel(asn, body)));
};

export default { metadata, tool, handler };
