// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/firewall/rules/{rule_id}',
  operationId: 'firewall-rules-delete-a-firewall-rule',
};

export const tool: Tool = {
  name: 'delete_firewall_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes an existing firewall rule.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/firewall_rule'\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    firewall_rule: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the firewall rule.'\n        },\n        action: {\n          $ref: '#/$defs/action'\n        },\n        description: {\n          type: 'string',\n          description: 'An informative summary of the firewall rule.'\n        },\n        filter: {\n          anyOf: [            {\n              $ref: '#/$defs/firewall_filter'\n            },\n            {\n              $ref: '#/$defs/deleted_filter'\n            }\n          ]\n        },\n        paused: {\n          type: 'boolean',\n          description: 'When true, indicates that the firewall rule is currently paused.'\n        },\n        priority: {\n          type: 'number',\n          description: 'The priority of the rule. Optional value used to define the processing order. A lower number indicates a higher priority. If not provided, rules with a defined priority will be processed before rules without a priority.'\n        },\n        products: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/product'\n          }\n        },\n        ref: {\n          type: 'string',\n          description: 'A short reference tag. Allows you to select related firewall rules.'\n        }\n      }\n    },\n    action: {\n      type: 'string',\n      description: 'The action to apply to a matched request. The `log` action is only available on an Enterprise plan.',\n      enum: [        'block',\n        'challenge',\n        'js_challenge',\n        'managed_challenge',\n        'allow',\n        'log',\n        'bypass'\n      ]\n    },\n    firewall_filter: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the filter.'\n        },\n        description: {\n          type: 'string',\n          description: 'An informative summary of the filter.'\n        },\n        expression: {\n          type: 'string',\n          description: 'The filter expression. For more information, refer to [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).'\n        },\n        paused: {\n          type: 'boolean',\n          description: 'When true, indicates that the filter is currently paused.'\n        },\n        ref: {\n          type: 'string',\n          description: 'A short reference tag. Allows you to select related filters.'\n        }\n      }\n    },\n    deleted_filter: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the filter.'\n        },\n        deleted: {\n          type: 'boolean',\n          description: 'When true, indicates that the firewall rule was deleted.'\n        }\n      },\n      required: [        'id',\n        'deleted'\n      ]\n    },\n    product: {\n      type: 'string',\n      description: 'A list of products to bypass for a request when using the `bypass` action.',\n      enum: [        'zoneLockdown',\n        'uaBlock',\n        'bic',\n        'hot',\n        'securityLevel',\n        'rateLimit',\n        'waf'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      rule_id: {
        type: 'string',
        description: 'The unique identifier of the firewall rule.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'rule_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.firewall.rules.delete(rule_id, body)));
};

export default { metadata, tool, handler };
