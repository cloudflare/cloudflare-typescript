// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.indicator_feeds.permissions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/intel/indicator-feeds/permissions/view',
  operationId: 'custom-indicator-feeds-view-permissions',
};

export const tool: Tool = {
  name: 'list_indicator_feeds_intel_permissions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList indicator feed permissions\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/permission_list_response',\n  $defs: {\n    permission_list_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer',\n            description: 'The unique identifier for the indicator feed'\n          },\n          description: {\n            type: 'string',\n            description: 'The description of the example test'\n          },\n          is_attributable: {\n            type: 'boolean',\n            description: 'Whether the indicator feed can be attributed to a provider'\n          },\n          is_downloadable: {\n            type: 'boolean',\n            description: 'Whether the indicator feed can be downloaded'\n          },\n          is_public: {\n            type: 'boolean',\n            description: 'Whether the indicator feed is exposed to customers'\n          },\n          name: {\n            type: 'string',\n            description: 'The name of the indicator feed'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.intel.indicatorFeeds.permissions.list(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
