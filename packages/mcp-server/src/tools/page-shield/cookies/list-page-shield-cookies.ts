// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.cookies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/page_shield/cookies',
  operationId: 'page-shield-list-cookies',
};

export const tool: Tool = {
  name: 'list_page_shield_cookies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all cookies collected by Page Shield.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Identifier'\n          },\n          first_seen_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          host: {\n            type: 'string'\n          },\n          last_seen_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          name: {\n            type: 'string'\n          },\n          type: {\n            type: 'string',\n            enum: [              'first_party',\n              'unknown'\n            ]\n          },\n          domain_attribute: {\n            type: 'string'\n          },\n          expires_attribute: {\n            type: 'string',\n            format: 'date-time'\n          },\n          http_only_attribute: {\n            type: 'boolean'\n          },\n          max_age_attribute: {\n            type: 'integer'\n          },\n          page_urls: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          path_attribute: {\n            type: 'string'\n          },\n          same_site_attribute: {\n            type: 'string',\n            enum: [              'lax',\n              'strict',\n              'none'\n            ]\n          },\n          secure_attribute: {\n            type: 'boolean'\n          }\n        },\n        required: [          'id',\n          'first_seen_at',\n          'host',\n          'last_seen_at',\n          'name',\n          'type'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        },\n        total_pages: {\n          type: 'number',\n          description: 'Total number of pages'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count',\n        'total_pages'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    }\n  },\n  required: [    'result',\n    'result_info',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
  const response = await client.pageShield.cookies.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
