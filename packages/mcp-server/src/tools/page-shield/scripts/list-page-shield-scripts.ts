// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.scripts',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_page_shield_scripts',
  description: 'Lists all scripts detected by Page Shield.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      direction: {
        type: 'string',
        description: 'The direction used to sort returned scripts.',
        enum: ['asc', 'desc'],
      },
      exclude_cdn_cgi: {
        type: 'boolean',
        description:
          'When true, excludes scripts seen in a `/cdn-cgi` path from the returned scripts. The default value is true.',
      },
      exclude_duplicates: {
        type: 'boolean',
        description:
          'When true, excludes duplicate scripts. We consider a script duplicate of another if their javascript\ncontent matches and they share the same url host and zone hostname. In such case, we return the most\nrecent script for the URL host and zone hostname combination.\n',
      },
      exclude_urls: {
        type: 'string',
        description: 'Excludes scripts whose URL contains one of the URL-encoded URLs separated by commas.\n',
      },
      export: {
        type: 'string',
        description: 'Export the list of scripts as a file.',
        enum: ['csv'],
      },
      hosts: {
        type: 'string',
        description:
          'Includes scripts that match one or more URL-encoded hostnames separated by commas.\n\nWildcards are supported at the start and end of each hostname to support starts with, ends with\nand contains. If no wildcards are used, results will be filtered by exact match\n',
      },
      order_by: {
        type: 'string',
        description: 'The field used to sort returned scripts.',
        enum: ['first_seen_at', 'last_seen_at'],
      },
      page: {
        type: 'string',
        description:
          'The current page number of the paginated results.\n\nWe additionally support a special value "all". When "all" is used, the API will return all the scripts\nwith the applied filters in a single page. This feature is best-effort and it may only work for zones with \na low number of scripts\n',
      },
      page_url: {
        type: 'string',
        description:
          'Includes scripts that match one or more page URLs (separated by commas) where they were last seen\n\nWildcards are supported at the start and end of each page URL to support starts with, ends with\nand contains. If no wildcards are used, results will be filtered by exact match\n',
      },
      per_page: {
        type: 'number',
        description: 'The number of results per page.',
      },
      prioritize_malicious: {
        type: 'boolean',
        description: 'When true, malicious scripts appear first in the returned scripts.',
      },
      status: {
        type: 'string',
        description:
          'Filters the returned scripts using a comma-separated list of scripts statuses. Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.',
      },
      urls: {
        type: 'string',
        description: 'Includes scripts whose URL contain one or more URL-encoded URLs separated by commas.\n',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.pageShield.scripts.list(body);
};

export default { metadata, tool, handler };
