// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.lockdowns',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_firewall_lockdowns',
  description: 'Fetches Zone Lockdown rules. You can filter the results using several optional parameters.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      created_on: {
        type: 'string',
        description: 'The timestamp of when the rule was created.',
        format: 'date-time',
      },
      description: {
        type: 'string',
        description: 'A string to search for in the description of existing rules.',
      },
      description_search: {
        type: 'string',
        description: 'A string to search for in the description of existing rules.',
      },
      ip: {
        type: 'string',
        description: 'A single IP address to search for in existing rules.',
      },
      ip_range_search: {
        type: 'string',
        description: 'A single IP address range to search for in existing rules.',
      },
      ip_search: {
        type: 'string',
        description: 'A single IP address to search for in existing rules.',
      },
      modified_on: {
        type: 'string',
        description: 'The timestamp of when the rule was last modified.',
        format: 'date-time',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description:
          'The maximum number of results per page. You can only set the value to `1` or to a multiple of 5 such as `5`, `10`, `15`, or `20`.',
      },
      priority: {
        type: 'number',
        description:
          'The priority of the rule to control the processing order. A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.',
      },
      uri_search: {
        type: 'string',
        description: 'A single URI to search for in the list of URLs of existing rules.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.firewall.lockdowns.list(body);
};

export default { metadata, tool, handler };
