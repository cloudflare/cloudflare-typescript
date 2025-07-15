// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.bots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/bots',
  operationId: 'radar-get-bots',
};

export const tool: Tool = {
  name: 'list_radar_bots',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of bots.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        bots: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              category: {\n                type: 'string',\n                description: 'The category of the bot.'\n              },\n              description: {\n                type: 'string',\n                description: 'A summary for the bot (e.g., purpose).'\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the bot.'\n              },\n              operator: {\n                type: 'string',\n                description: 'The organization that owns and operates the bot.'\n              },\n              slug: {\n                type: 'string',\n                description: 'A kebab-case identifier derived from the bot name.'\n              }\n            },\n            required: [              'category',\n              'description',\n              'name',\n              'operator',\n              'slug'\n            ]\n          }\n        }\n      },\n      required: [        'bots'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      botCategory: {
        type: 'string',
        description: 'Filters results by bot category.',
        enum: [
          'SEARCH_ENGINE_CRAWLER',
          'SEARCH_ENGINE_OPTIMIZATION',
          'MONITORING_AND_ANALYTICS',
          'ADVERTISING_AND_MARKETING',
          'SOCIAL_MEDIA_MARKETING',
          'PAGE_PREVIEW',
          'ACADEMIC_RESEARCH',
          'SECURITY',
          'ACCESSIBILITY',
          'WEBHOOKS',
          'FEED_FETCHER',
          'AI_CRAWLER',
          'AGGREGATOR',
          'AI_ASSISTANT',
          'AI_SEARCH',
          'ARCHIVER',
        ],
      },
      botOperator: {
        type: 'string',
        description: 'Filters results by bot operator.',
      },
      botVerificationStatus: {
        type: 'string',
        description: 'Filters results by bot verification status.',
        enum: ['VERIFIED'],
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
      },
      limit: {
        type: 'integer',
        description: 'Limits the number of objects returned in the response.',
      },
      offset: {
        type: 'integer',
        description: 'Skips the specified number of objects before fetching the results.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.radar.bots.list(body)));
};

export default { metadata, tool, handler };
