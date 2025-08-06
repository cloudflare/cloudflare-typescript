// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.searches',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/load_balancers/search',
  operationId: 'account-load-balancer-search-search-resources',
};

export const tool: Tool = {
  name: 'list_load_balancers_searches',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch for Load Balancing resources.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        resources: {\n          type: 'array',\n          description: 'A list of resources matching the search query.',\n          items: {\n            type: 'object',\n            description: 'A reference to a load balancer resource.',\n            properties: {\n              reference_type: {\n                type: 'string',\n                description: 'When listed as a reference, the type (direction) of the reference.',\n                enum: [                  'referral',\n                  'referrer'\n                ]\n              },\n              references: {\n                type: 'array',\n                description: 'A list of references to (referrer) or from (referral) this resource.',\n                items: {\n                  type: 'object',\n                  description: 'A reference to a load balancer resource.'\n                }\n              },\n              resource_id: {\n                type: 'string'\n              },\n              resource_name: {\n                type: 'string',\n                description: 'The human-identifiable name of the resource.'\n              },\n              resource_type: {\n                type: 'string',\n                description: 'The type of the resource.',\n                enum: [                  'load_balancer',\n                  'monitor',\n                  'pool'\n                ]\n              }\n            }\n          }\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results on the current page.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        },\n        total_pages: {\n          type: 'number',\n          description: 'Total number of pages available.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      page: {
        type: 'number',
      },
      per_page: {
        type: 'number',
      },
      query: {
        type: 'string',
        description: 'Search query term.',
      },
      references: {
        type: 'string',
        description:
          'The type of references to include. "*" to include both referral and referrer references. "" to not include any reference information.',
        enum: ['', '*', 'referral', 'referrer'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.loadBalancers.searches.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
