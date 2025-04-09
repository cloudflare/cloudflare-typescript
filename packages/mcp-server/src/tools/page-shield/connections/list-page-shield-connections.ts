// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.connections',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_page_shield_connections',
  description: 'Lists all connections detected by Page Shield.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      direction: {
        type: 'string',
        description: 'The direction used to sort returned connections.',
        enum: ['asc', 'desc'],
      },
      exclude_cdn_cgi: {
        type: 'boolean',
        description:
          'When true, excludes connections seen in a `/cdn-cgi` path from the returned connections. The default value is true.',
      },
      exclude_urls: {
        type: 'string',
        description:
          'Excludes connections whose URL contains one of the URL-encoded URLs separated by commas.\n',
      },
      export: {
        type: 'string',
        description: 'Export the list of connections as a file.',
        enum: ['csv'],
      },
      hosts: {
        type: 'string',
        description:
          'Includes connections that match one or more URL-encoded hostnames separated by commas.\n\nWildcards are supported at the start and end of each hostname to support starts with, ends with\nand contains. If no wildcards are used, results will be filtered by exact match\n',
      },
      order_by: {
        type: 'string',
        description: 'The field used to sort returned connections.',
        enum: ['first_seen_at', 'last_seen_at'],
      },
      page: {
        type: 'string',
        description:
          'The current page number of the paginated results.\n\nWe additionally support a special value "all". When "all" is used, the API will return all the connections\nwith the applied filters in a single page. This feature is best-effort and it may only work for zones with\na low number of connections\n',
      },
      page_url: {
        type: 'string',
        description:
          'Includes connections that match one or more page URLs (separated by commas) where they were last seen\n\nWildcards are supported at the start and end of each page URL to support starts with, ends with\nand contains. If no wildcards are used, results will be filtered by exact match\n',
      },
      per_page: {
        type: 'number',
        description: 'The number of results per page.',
      },
      prioritize_malicious: {
        type: 'boolean',
        description: 'When true, malicious connections appear first in the returned connections.',
      },
      status: {
        type: 'string',
        description:
          'Filters the returned connections using a comma-separated list of connection statuses. Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.',
      },
      urls: {
        type: 'string',
        description:
          'Includes connections whose URL contain one or more URL-encoded URLs separated by commas.\n',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.pageShield.connections.list(body);
};

export default { metadata, tool, handler };
