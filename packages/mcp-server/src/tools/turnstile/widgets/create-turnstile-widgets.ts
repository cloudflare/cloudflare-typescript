// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'turnstile.widgets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/challenges/widgets',
  operationId: 'accounts-turnstile-widget-create',
};

export const tool: Tool = {
  name: 'create_turnstile_widgets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists challenge widgets.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful'\n    },\n    result: {\n      $ref: '#/$defs/widget'\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    widget: {\n      type: 'object',\n      description: 'A Turnstile widget\\'s detailed configuration',\n      properties: {\n        bot_fight_mode: {\n          type: 'boolean',\n          description: 'If bot_fight_mode is set to `true`, Cloudflare issues computationally\\nexpensive challenges in response to malicious bots (ENT only).\\n'\n        },\n        clearance_level: {\n          type: 'string',\n          description: 'If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance,\\nthis setting can determine the clearance level to be set',\n          enum: [            'no_clearance',\n            'jschallenge',\n            'managed',\n            'interactive'\n          ]\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the widget was created.',\n          format: 'date-time'\n        },\n        domains: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/widget_domain'\n          }\n        },\n        ephemeral_id: {\n          type: 'boolean',\n          description: 'Return the Ephemeral ID in /siteverify (ENT only).\\n'\n        },\n        mode: {\n          type: 'string',\n          description: 'Widget Mode',\n          enum: [            'non-interactive',\n            'invisible',\n            'managed'\n          ]\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the widget was modified.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Human readable widget name. Not unique. Cloudflare suggests that you\\nset this to a meaningful string to make it easier to identify your\\nwidget, and where it is used.\\n'\n        },\n        offlabel: {\n          type: 'boolean',\n          description: 'Do not show any Cloudflare branding on the widget (ENT only).\\n'\n        },\n        region: {\n          type: 'string',\n          description: 'Region where this widget can be used. This cannot be changed after creation.',\n          enum: [            'world',\n            'china'\n          ]\n        },\n        secret: {\n          type: 'string',\n          description: 'Secret key for this widget.'\n        },\n        sitekey: {\n          type: 'string',\n          description: 'Widget item identifier tag.'\n        }\n      },\n      required: [        'bot_fight_mode',\n        'clearance_level',\n        'created_on',\n        'domains',\n        'ephemeral_id',\n        'mode',\n        'modified_on',\n        'name',\n        'offlabel',\n        'region',\n        'secret',\n        'sitekey'\n      ]\n    },\n    widget_domain: {\n      type: 'string',\n      description: 'Hosts as a hostname or IPv4/IPv6 address represented by strings. The\\nwidget will only work on these domains, and their subdomains.\\n'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      domains: {
        type: 'array',
        items: {
          $ref: '#/$defs/widget_domain',
        },
      },
      mode: {
        type: 'string',
        description: 'Widget Mode',
        enum: ['non-interactive', 'invisible', 'managed'],
      },
      name: {
        type: 'string',
        description:
          'Human readable widget name. Not unique. Cloudflare suggests that you\nset this to a meaningful string to make it easier to identify your\nwidget, and where it is used.\n',
      },
      direction: {
        type: 'string',
        description: 'Direction to order widgets.',
        enum: ['asc', 'desc'],
      },
      order: {
        type: 'string',
        description: 'Field to order widgets by.',
        enum: ['id', 'sitekey', 'name', 'created_on', 'modified_on'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page.',
      },
      bot_fight_mode: {
        type: 'boolean',
        description:
          'If bot_fight_mode is set to `true`, Cloudflare issues computationally\nexpensive challenges in response to malicious bots (ENT only).\n',
      },
      clearance_level: {
        type: 'string',
        description:
          'If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance,\nthis setting can determine the clearance level to be set',
        enum: ['no_clearance', 'jschallenge', 'managed', 'interactive'],
      },
      ephemeral_id: {
        type: 'boolean',
        description: 'Return the Ephemeral ID in /siteverify (ENT only).\n',
      },
      offlabel: {
        type: 'boolean',
        description: 'Do not show any Cloudflare branding on the widget (ENT only).\n',
      },
      region: {
        type: 'string',
        description: 'Region where this widget can be used. This cannot be changed after creation.',
        enum: ['world', 'china'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      widget_domain: {
        type: 'string',
        description:
          'Hosts as a hostname or IPv4/IPv6 address represented by strings. The\nwidget will only work on these domains, and their subdomains.\n',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.turnstile.widgets.create(body)));
};

export default { metadata, tool, handler };
