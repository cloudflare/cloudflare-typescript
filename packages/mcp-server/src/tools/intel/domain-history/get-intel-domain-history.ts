// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.domain_history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/intel/domain-history',
  operationId: 'domain-history-get-domain-history',
};

export const tool: Tool = {
  name: 'get_intel_domain_history',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets historical security threat and content categories currently and previously assigned to a domain.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/domain_history_get_response',\n  $defs: {\n    domain_history_get_response: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/domain_history'\n      }\n    },\n    domain_history: {\n      type: 'object',\n      properties: {\n        categorizations: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              categories: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'integer'\n                    },\n                    name: {\n                      type: 'string'\n                    }\n                  }\n                }\n              },\n              end: {\n                type: 'string',\n                format: 'date'\n              },\n              start: {\n                type: 'string',\n                format: 'date'\n              }\n            }\n          }\n        },\n        domain: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      domain: {
        type: 'string',
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.intel.domainHistory.get(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
