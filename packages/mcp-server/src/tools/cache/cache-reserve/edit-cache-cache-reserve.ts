// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cache.cache_reserve',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/cache/cache_reserve',
  operationId: 'zone-cache-settings-change-cache-reserve-setting',
};

export const tool: Tool = {
  name: 'edit_cache_cache_reserve',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nIncrease cache lifetimes by automatically storing all cacheable files into Cloudflare's persistent object storage buckets. Requires Cache Reserve subscription. Note: using Tiered Cache with Cache Reserve is highly recommended to reduce Reserve operations costs. See the [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve) for more information.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/cache_reserve_edit_response',\n  $defs: {\n    cache_reserve_edit_response: {\n      type: 'object',\n      title: 'Cache Reserve',\n      properties: {\n        id: {\n          $ref: '#/$defs/cache_reserve'\n        },\n        editable: {\n          type: 'boolean',\n          description: 'Whether the setting is editable.'\n        },\n        value: {\n          type: 'string',\n          description: 'Value of the Cache Reserve zone setting.',\n          enum: [            'on',\n            'off'\n          ]\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Last time this setting was modified.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'editable',\n        'value'\n      ]\n    },\n    cache_reserve: {\n      type: 'string',\n      description: 'The identifier of the caching setting.',\n      enum: [        'cache_reserve'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      value: {
        type: 'string',
        description: 'Value of the Cache Reserve zone setting.',
        enum: ['on', 'off'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'value'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.cache.cacheReserve.edit(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
