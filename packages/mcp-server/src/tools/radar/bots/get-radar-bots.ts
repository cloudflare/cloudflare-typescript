// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bots/{bot_slug}',
  operationId: 'radar-get-bot-details',
};

export const tool: Tool = {
  name: 'get_radar_bots',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the requested bot information.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/bot_get_response',\n  $defs: {\n    bot_get_response: {\n      type: 'object',\n      properties: {\n        bot: {\n          type: 'object',\n          properties: {\n            category: {\n              type: 'string',\n              description: 'The category of the bot.'\n            },\n            description: {\n              type: 'string',\n              description: 'A summary for the bot (e.g., purpose).'\n            },\n            kind: {\n              type: 'string',\n              description: 'The kind of the bot.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the bot.'\n            },\n            operator: {\n              type: 'string',\n              description: 'The organization that owns and operates the bot.'\n            },\n            operatorUrl: {\n              type: 'string',\n              description: 'The link to the bot documentation.'\n            },\n            slug: {\n              type: 'string',\n              description: 'A kebab-case identifier derived from the bot name.'\n            },\n            userAgentPatterns: {\n              type: 'array',\n              items: {\n                type: 'string',\n                description: 'User agent patterns that identify the bot in web traffic.'\n              }\n            },\n            userAgents: {\n              type: 'array',\n              items: {\n                type: 'string',\n                description: 'User agent strings used by this bot in HTTP requests.'\n              }\n            }\n          },\n          required: [            'category',\n            'description',\n            'kind',\n            'name',\n            'operator',\n            'operatorUrl',\n            'slug',\n            'userAgentPatterns',\n            'userAgents'\n          ]\n        }\n      },\n      required: [        'bot'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bot_slug: {
        type: 'string',
        description: 'Bot slug.',
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
    required: ['bot_slug'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bot_slug, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.radar.bots.get(bot_slug, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
