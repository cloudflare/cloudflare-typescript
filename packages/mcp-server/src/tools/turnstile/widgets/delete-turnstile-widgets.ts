// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'turnstile.widgets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/challenges/widgets/{sitekey}',
  operationId: 'accounts-turnstile-widget-delete',
};

export const tool: Tool = {
  name: 'delete_turnstile_widgets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDestroy a Turnstile Widget.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful'\n    },\n    result: {\n      $ref: '#/$defs/widget'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    widget: {\n      type: 'object',\n      description: 'A Turnstile widget\\'s detailed configuration',\n      properties: {\n        bot_fight_mode: {\n          type: 'boolean',\n          description: 'If bot_fight_mode is set to `true`, Cloudflare issues computationally\\nexpensive challenges in response to malicious bots (ENT only).\\n'\n        },\n        clearance_level: {\n          type: 'string',\n          description: 'If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance,\\nthis setting can determine the clearance level to be set',\n          enum: [            'no_clearance',\n            'jschallenge',\n            'managed',\n            'interactive'\n          ]\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the widget was created.',\n          format: 'date-time'\n        },\n        domains: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/widget_domain'\n          }\n        },\n        ephemeral_id: {\n          type: 'boolean',\n          description: 'Return the Ephemeral ID in /siteverify (ENT only).\\n'\n        },\n        mode: {\n          type: 'string',\n          description: 'Widget Mode',\n          enum: [            'non-interactive',\n            'invisible',\n            'managed'\n          ]\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the widget was modified.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Human readable widget name. Not unique. Cloudflare suggests that you\\nset this to a meaningful string to make it easier to identify your\\nwidget, and where it is used.\\n'\n        },\n        offlabel: {\n          type: 'boolean',\n          description: 'Do not show any Cloudflare branding on the widget (ENT only).\\n'\n        },\n        region: {\n          type: 'string',\n          description: 'Region where this widget can be used. This cannot be changed after creation.',\n          enum: [            'world',\n            'china'\n          ]\n        },\n        secret: {\n          type: 'string',\n          description: 'Secret key for this widget.'\n        },\n        sitekey: {\n          type: 'string',\n          description: 'Widget item identifier tag.'\n        }\n      },\n      required: [        'bot_fight_mode',\n        'clearance_level',\n        'created_on',\n        'domains',\n        'ephemeral_id',\n        'mode',\n        'modified_on',\n        'name',\n        'offlabel',\n        'region',\n        'secret',\n        'sitekey'\n      ]\n    },\n    widget_domain: {\n      type: 'string',\n      description: 'Hosts as a hostname or IPv4/IPv6 address represented by strings. The\\nwidget will only work on these domains, and their subdomains.\\n'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      sitekey: {
        type: 'string',
        description: 'Widget item identifier tag.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'sitekey'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { sitekey, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.turnstile.widgets.delete(sitekey, body)));
};

export default { metadata, tool, handler };
