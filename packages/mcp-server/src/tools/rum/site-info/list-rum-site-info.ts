// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rum.site_info',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/rum/site_info/list',
  operationId: 'web-analytics-list-sites',
};

export const tool: Tool = {
  name: 'list_rum_site_info',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all Web Analytics sites of an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/site'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'The total number of items on the current page.'\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page within the paginated list of results.'\n        },\n        per_page: {\n          type: 'integer',\n          description: 'The maximum number of items to return per page of results.'\n        },\n        total_count: {\n          type: 'integer',\n          description: 'The total number of items.'\n        },\n        total_pages: {\n          type: 'integer',\n          description: 'The total number of pages.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    site: {\n      type: 'object',\n      properties: {\n        auto_install: {\n          type: 'boolean',\n          description: 'If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.'\n        },\n        created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        rules: {\n          type: 'array',\n          description: 'A list of rules.',\n          items: {\n            $ref: '#/$defs/rum_rule'\n          }\n        },\n        ruleset: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The Web Analytics ruleset identifier.'\n            },\n            enabled: {\n              type: 'boolean',\n              description: 'Whether the ruleset is enabled.'\n            },\n            zone_name: {\n              type: 'string'\n            },\n            zone_tag: {\n              type: 'string',\n              description: 'The zone identifier.'\n            }\n          },\n          required: []\n        },\n        site_tag: {\n          type: 'string',\n          description: 'The Web Analytics site identifier.'\n        },\n        site_token: {\n          type: 'string',\n          description: 'The Web Analytics site token.'\n        },\n        snippet: {\n          type: 'string',\n          description: 'Encoded JavaScript snippet.'\n        }\n      },\n      required: []\n    },\n    rum_rule: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The Web Analytics rule identifier.'\n        },\n        created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        host: {\n          type: 'string',\n          description: 'The hostname the rule will be applied to.'\n        },\n        inclusive: {\n          type: 'boolean',\n          description: 'Whether the rule includes or excludes traffic from being measured.'\n        },\n        is_paused: {\n          type: 'boolean',\n          description: 'Whether the rule is paused or not.'\n        },\n        paths: {\n          type: 'array',\n          description: 'The paths the rule will be applied to.',\n          items: {\n            type: 'string'\n          }\n        },\n        priority: {\n          type: 'number'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      order_by: {
        type: 'string',
        description: 'The property used to sort the list of results.',
        enum: ['host', 'created'],
      },
      page: {
        type: 'number',
        description: 'Current page within the paginated list of results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of items to return per page of results.',
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
  const response = await client.rum.siteInfo.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
