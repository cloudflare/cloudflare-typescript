// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.scripts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/page_shield/scripts',
  operationId: 'page-shield-list-scripts',
};

export const tool: Tool = {
  name: 'list_page_shield_scripts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all scripts detected by Page Shield.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/script'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        },\n        total_pages: {\n          type: 'number',\n          description: 'Total number of pages'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count',\n        'total_pages'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    }\n  },\n  required: [    'result',\n    'result_info',\n    'success'\n  ],\n  $defs: {\n    script: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        added_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        first_seen_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        host: {\n          type: 'string'\n        },\n        last_seen_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        url: {\n          type: 'string'\n        },\n        url_contains_cdn_cgi_path: {\n          type: 'boolean'\n        },\n        cryptomining_score: {\n          type: 'integer',\n          description: 'The cryptomining score of the JavaScript content.'\n        },\n        dataflow_score: {\n          type: 'integer',\n          description: 'The dataflow score of the JavaScript content.'\n        },\n        domain_reported_malicious: {\n          type: 'boolean'\n        },\n        fetched_at: {\n          type: 'string',\n          description: 'The timestamp of when the script was last fetched.'\n        },\n        first_page_url: {\n          type: 'string'\n        },\n        hash: {\n          type: 'string',\n          description: 'The computed hash of the analyzed script.'\n        },\n        js_integrity_score: {\n          type: 'integer',\n          description: 'The integrity score of the JavaScript content.'\n        },\n        magecart_score: {\n          type: 'integer',\n          description: 'The magecart score of the JavaScript content.'\n        },\n        malicious_domain_categories: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        malicious_url_categories: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        malware_score: {\n          type: 'integer',\n          description: 'The malware score of the JavaScript content.'\n        },\n        obfuscation_score: {\n          type: 'integer',\n          description: 'The obfuscation score of the JavaScript content.'\n        },\n        page_urls: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        url_reported_malicious: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'added_at',\n        'first_seen_at',\n        'host',\n        'last_seen_at',\n        'url',\n        'url_contains_cdn_cgi_path'\n      ]\n    },\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
        description: 'Export the list of scripts as a file, limited to 50000 entries.',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.pageShield.scripts.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
