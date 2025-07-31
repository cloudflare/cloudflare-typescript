// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.asn.subnets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/intel/asn/{asn}/subnets',
  operationId: 'asn-intelligence-get-asn-subnets',
};

export const tool: Tool = {
  name: 'get_asn_intel_subnets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet ASN Subnets.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    asn: {\n      $ref: '#/$defs/asn'\n    },\n    count: {\n      type: 'number',\n      description: 'Total results returned based on your search parameters.'\n    },\n    ip_count_total: {\n      type: 'integer'\n    },\n    page: {\n      type: 'number',\n      description: 'Current page within paginated list of results.'\n    },\n    per_page: {\n      type: 'number',\n      description: 'Number of results per page of results.'\n    },\n    subnets: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    }\n  },\n  $defs: {\n    asn: {\n      type: 'integer'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      asn: {
        $ref: '#/$defs/asn',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'asn'],
    $defs: {
      asn: {
        type: 'integer',
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { asn, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.intel.asn.subnets.get(asn, body)));
};

export default { metadata, tool, handler };
