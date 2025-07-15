// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/page_shield/connections',
  operationId: 'page-shield-list-connections',
};

export const tool: Tool = {
  name: 'list_page_shield_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all connections detected by Page Shield.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        },\n        total_pages: {\n          type: 'number',\n          description: 'Total number of pages'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count',\n        'total_pages'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/connection'\n      }\n    }\n  },\n  required: [    'result_info',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    connection: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        added_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        first_seen_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        host: {\n          type: 'string'\n        },\n        last_seen_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        url: {\n          type: 'string'\n        },\n        url_contains_cdn_cgi_path: {\n          type: 'boolean'\n        },\n        domain_reported_malicious: {\n          type: 'boolean'\n        },\n        first_page_url: {\n          type: 'string'\n        },\n        malicious_domain_categories: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        malicious_url_categories: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        page_urls: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        url_reported_malicious: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'added_at',\n        'first_seen_at',\n        'host',\n        'last_seen_at',\n        'url',\n        'url_contains_cdn_cgi_path'\n      ]\n    }\n  }\n}\n```",
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
  const response = await client.pageShield.connections.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
