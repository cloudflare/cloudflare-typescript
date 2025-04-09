// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.robots_txt.top.user_agents',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'directive_top_robots_txt_radar_user_agents',
  description: 'Retrieves the top user agents on robots.txt files.',
  inputSchema: {
    type: 'object',
    properties: {
      date: {
        type: 'array',
        description: 'Array of dates to filter the results.',
        items: {
          type: 'string',
          format: 'date',
        },
      },
      directive: {
        type: 'string',
        description: 'Filters results by robots.txt directive.',
        enum: ['ALLOW', 'DISALLOW'],
      },
      domainCategory: {
        type: 'array',
        description: 'Filters results by domain category.',
        items: {
          type: 'string',
        },
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
      name: {
        type: 'array',
        description: 'Array of names used to label the series in the response.',
        items: {
          type: 'string',
        },
      },
      userAgentCategory: {
        type: 'string',
        description: 'Filters results by user agent category.',
        enum: ['AI'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.robotsTXT.top.userAgents.directive(body);
};

export default { metadata, tool, handler };
