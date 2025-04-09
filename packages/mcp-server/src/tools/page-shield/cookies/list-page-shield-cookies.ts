// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.cookies',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_page_shield_cookies',
  description: 'Lists all cookies collected by Page Shield.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      direction: {
        type: 'string',
        description: "The direction used to sort returned cookies.'",
        enum: ['asc', 'desc'],
      },
      domain: {
        type: 'string',
        description: 'Filters the returned cookies that match the specified domain attribute',
      },
      export: {
        type: 'string',
        description: 'Export the list of cookies as a file.',
        enum: ['csv'],
      },
      hosts: {
        type: 'string',
        description:
          'Includes cookies that match one or more URL-encoded hostnames separated by commas.\n\nWildcards are supported at the start and end of each hostname to support starts with, ends with\nand contains. If no wildcards are used, results will be filtered by exact match\n',
      },
      http_only: {
        type: 'boolean',
        description: 'Filters the returned cookies that are set with HttpOnly',
      },
      name: {
        type: 'string',
        description:
          'Filters the returned cookies that match the specified name.\nWildcards are supported at the start and end to support starts with, ends with\nand contains. e.g. session*\n',
      },
      order_by: {
        type: 'string',
        description: 'The field used to sort returned cookies.',
        enum: ['first_seen_at', 'last_seen_at'],
      },
      page: {
        type: 'string',
        description:
          'The current page number of the paginated results.\n\nWe additionally support a special value "all". When "all" is used, the API will return all the cookies\nwith the applied filters in a single page. This feature is best-effort and it may only work for zones with \na low number of cookies\n',
      },
      page_url: {
        type: 'string',
        description:
          'Includes connections that match one or more page URLs (separated by commas) where they were last seen\n\nWildcards are supported at the start and end of each page URL to support starts with, ends with\nand contains. If no wildcards are used, results will be filtered by exact match\n',
      },
      path: {
        type: 'string',
        description: 'Filters the returned cookies that match the specified path attribute',
      },
      per_page: {
        type: 'number',
        description: 'The number of results per page.',
      },
      same_site: {
        type: 'string',
        description: 'Filters the returned cookies that match the specified same_site attribute',
        enum: ['lax', 'strict', 'none'],
      },
      secure: {
        type: 'boolean',
        description: 'Filters the returned cookies that are set with Secure',
      },
      type: {
        type: 'string',
        description: 'Filters the returned cookies that match the specified type attribute',
        enum: ['first_party', 'unknown'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.pageShield.cookies.list(body);
};

export default { metadata, tool, handler };
