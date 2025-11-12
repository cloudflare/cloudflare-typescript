// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.custom_pages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/custom_pages/{custom_page_id}',
  operationId: 'access-custom-pages-get-a-custom-page',
};

export const tool: Tool = {
  name: 'get_access_zero_trust_custom_pages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a custom page and also returns its HTML.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/custom_page',\n  $defs: {\n    custom_page: {\n      type: 'object',\n      properties: {\n        custom_html: {\n          type: 'string',\n          description: 'Custom page HTML.'\n        },\n        name: {\n          type: 'string',\n          description: 'Custom page name.'\n        },\n        type: {\n          type: 'string',\n          description: 'Custom page type.',\n          enum: [            'identity_denied',\n            'forbidden'\n          ]\n        },\n        uid: {\n          type: 'string',\n          description: 'UUID.'\n        }\n      },\n      required: [        'custom_html',\n        'name',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      custom_page_id: {
        type: 'string',
        description: 'UUID.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'custom_page_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { custom_page_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.access.customPages.get(custom_page_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
