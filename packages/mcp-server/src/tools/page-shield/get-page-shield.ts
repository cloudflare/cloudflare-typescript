// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/page_shield',
  operationId: 'page-shield-get-settings',
};

export const tool: Tool = {
  name: 'get_page_shield',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the Page Shield settings.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/setting'\n    }\n  },\n  required: [    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    setting: {\n      type: 'object',\n      properties: {\n        enabled: {\n          type: 'boolean',\n          description: 'When true, indicates that Page Shield is enabled.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp of when Page Shield was last updated.'\n        },\n        use_cloudflare_reporting_endpoint: {\n          type: 'boolean',\n          description: 'When true, CSP reports will be sent to https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report'\n        },\n        use_connection_url_path: {\n          type: 'boolean',\n          description: 'When true, the paths associated with connections URLs will also be analyzed.'\n        }\n      },\n      required: [        'enabled',\n        'updated_at',\n        'use_cloudflare_reporting_endpoint',\n        'use_connection_url_path'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.pageShield.get(body)));
};

export default { metadata, tool, handler };
