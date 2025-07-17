// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rum.rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/rum/v2/{ruleset_id}/rules',
  operationId: 'web-analytics-list-rules',
};

export const tool: Tool = {
  name: 'list_rum_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all the rules in a Web Analytics ruleset.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result: {\n      type: 'object',\n      properties: {\n        rules: {\n          type: 'array',\n          description: 'A list of rules.',\n          items: {\n            $ref: '#/$defs/rum_rule'\n          }\n        },\n        ruleset: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The Web Analytics ruleset identifier.'\n            },\n            enabled: {\n              type: 'boolean',\n              description: 'Whether the ruleset is enabled.'\n            },\n            zone_name: {\n              type: 'string'\n            },\n            zone_tag: {\n              type: 'string',\n              description: 'The zone identifier.'\n            }\n          }\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    rum_rule: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The Web Analytics rule identifier.'\n        },\n        created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        host: {\n          type: 'string',\n          description: 'The hostname the rule will be applied to.'\n        },\n        inclusive: {\n          type: 'boolean',\n          description: 'Whether the rule includes or excludes traffic from being measured.'\n        },\n        is_paused: {\n          type: 'boolean',\n          description: 'Whether the rule is paused or not.'\n        },\n        paths: {\n          type: 'array',\n          description: 'The paths the rule will be applied to.',\n          items: {\n            type: 'string'\n          }\n        },\n        priority: {\n          type: 'number'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      ruleset_id: {
        type: 'string',
        description: 'The Web Analytics ruleset identifier.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'ruleset_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ruleset_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.rum.rules.list(ruleset_id, body)));
};

export default { metadata, tool, handler };
