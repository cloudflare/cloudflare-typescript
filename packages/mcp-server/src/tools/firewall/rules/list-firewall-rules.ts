// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/firewall/rules',
  operationId: 'firewall-rules-list-firewall-rules',
};

export const tool: Tool = {
  name: 'list_firewall_rules',
  description:
    'Fetches firewall rules in a zone. You can filter the results using several optional parameters.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      id: {
        type: 'string',
        description: 'The unique identifier of the firewall rule.',
      },
      action: {
        type: 'string',
        description: 'The action to search for. Must be an exact match.',
      },
      description: {
        type: 'string',
        description: 'A case-insensitive string to find in the description.',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      paused: {
        type: 'boolean',
        description: 'When true, indicates that the firewall rule is currently paused.',
      },
      per_page: {
        type: 'number',
        description: 'Number of firewall rules per page.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.firewall.rules.list(body));
};

export default { metadata, tool, handler };
