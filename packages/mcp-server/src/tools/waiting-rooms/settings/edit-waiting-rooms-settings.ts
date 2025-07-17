// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.settings',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/waiting_rooms/settings',
  operationId: 'waiting-room-patch-zone-settings',
};

export const tool: Tool = {
  name: 'edit_waiting_rooms_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPatch zone-level Waiting Room settings\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        search_engine_crawler_bypass: {\n          type: 'boolean',\n          description: 'Whether to allow verified search engine crawlers to bypass all waiting rooms on this zone.\\nVerified search engine crawlers will not be tracked or counted by the waiting room system,\\nand will not appear in waiting room analytics.\\n'\n        }\n      },\n      required: [        'search_engine_crawler_bypass'\n      ]\n    }\n  },\n  required: [    'result'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      search_engine_crawler_bypass: {
        type: 'boolean',
        description:
          'Whether to allow verified search engine crawlers to bypass all waiting rooms on this zone.\nVerified search engine crawlers will not be tracked or counted by the waiting room system,\nand will not appear in waiting room analytics.\n',
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.waitingRooms.settings.edit(body)));
};

export default { metadata, tool, handler };
