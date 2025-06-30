// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Retrieves a list of bots.',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.radar.bots.list(body));
};

export default { metadata, tool, handler };
