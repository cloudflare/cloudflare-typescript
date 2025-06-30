// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.ua_rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/firewall/ua_rules',
  operationId: 'user-agent-blocking-rules-list-user-agent-blocking-rules',
};

export const tool: Tool = {
  name: 'list_firewall_ua_rules',
  description:
    'Fetches User Agent Blocking rules in a zone. You can filter the results using several optional parameters.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      description: {
        type: 'string',
        description: 'A string to search for in the description of existing rules.',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      paused: {
        type: 'boolean',
        description: 'When true, indicates that the rule is currently paused.',
      },
      per_page: {
        type: 'number',
        description:
          'The maximum number of results per page. You can only set the value to `1` or to a multiple of 5 such as `5`, `10`, `15`, or `20`.',
      },
      user_agent: {
        type: 'string',
        description: 'A string to search for in the user agent values of existing rules.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.firewall.uaRules.list(body));
};

export default { metadata, tool, handler };
