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
  httpPath: '/zones/{zone_id}/page_shield/cookies/{cookie_id}',
  operationId: 'page-shield-get-cookie',
};

export const tool: Tool = {
  name: 'get_page_shield_cookies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a cookie collected by Page Shield by cookie ID.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        first_seen_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        host: {\n          type: 'string'\n        },\n        last_seen_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'first_party',\n            'unknown'\n          ]\n        },\n        domain_attribute: {\n          type: 'string'\n        },\n        expires_attribute: {\n          type: 'string',\n          format: 'date-time'\n        },\n        http_only_attribute: {\n          type: 'boolean'\n        },\n        max_age_attribute: {\n          type: 'integer'\n        },\n        page_urls: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        path_attribute: {\n          type: 'string'\n        },\n        same_site_attribute: {\n          type: 'string',\n          enum: [            'lax',\n            'strict',\n            'none'\n          ]\n        },\n        secure_attribute: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'first_seen_at',\n        'host',\n        'last_seen_at',\n        'name',\n        'type'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    }\n  },\n  required: [    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      cookie_id: {
        type: 'string',
        description: 'Identifier',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'cookie_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { cookie_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.pageShield.cookies.get(cookie_id, body)));
};

export default { metadata, tool, handler };
