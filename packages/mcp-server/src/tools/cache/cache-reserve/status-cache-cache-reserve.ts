// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cache.cache_reserve',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/cache/cache_reserve_clear',
  operationId: 'zone-cache-settings-get-cache-reserve-clear',
};

export const tool: Tool = {
  name: 'status_cache_cache_reserve',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nYou can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/cache_reserve_status_response',\n  $defs: {\n    cache_reserve_status_response: {\n      type: 'object',\n      title: 'Cache Reserve Clear',\n      description: 'You can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.',\n      properties: {\n        id: {\n          $ref: '#/$defs/cache_reserve_clear'\n        },\n        start_ts: {\n          type: 'string',\n          description: 'The time that the latest Cache Reserve Clear operation started.',\n          format: 'date-time'\n        },\n        state: {\n          $ref: '#/$defs/state'\n        },\n        end_ts: {\n          type: 'string',\n          description: 'The time that the latest Cache Reserve Clear operation completed.',\n          format: 'date-time'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Last time this setting was modified.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'start_ts',\n        'state'\n      ]\n    },\n    cache_reserve_clear: {\n      type: 'string',\n      description: 'ID of the zone setting.',\n      enum: [        'cache_reserve_clear'\n      ]\n    },\n    state: {\n      type: 'string',\n      description: 'The current state of the Cache Reserve Clear operation.',\n      enum: [        'In-progress',\n        'Completed'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.cache.cacheReserve.status(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
