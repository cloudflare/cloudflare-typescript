// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cache.smart_tiered_cache',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/cache/tiered_cache_smart_topology_enable',
  operationId: 'smart-tiered-cache-delete-smart-tiered-cache-setting',
};

export const tool: Tool = {
  name: 'delete_cache_smart_tiered_cache',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSmart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/smart_tiered_cache_delete_response',\n  $defs: {\n    smart_tiered_cache_delete_response: {\n      type: 'object',\n      title: 'Smart Tiered Cache',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The identifier of the caching setting.',\n          enum: [            'tiered_cache_smart_topology_enable'\n          ]\n        },\n        editable: {\n          type: 'boolean',\n          description: 'Whether the setting is editable.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Last time this setting was modified.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'editable'\n      ]\n    }\n  }\n}\n```",
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
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.cache.smartTieredCache.delete(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
