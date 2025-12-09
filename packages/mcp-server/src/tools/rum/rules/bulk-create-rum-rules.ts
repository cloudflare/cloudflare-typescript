// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rum.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/rum/v2/{ruleset_id}/rules',
  operationId: 'web-analytics-modify-rules',
};

export const tool: Tool = {
  name: 'bulk_create_rum_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nModifies one or more rules in a Web Analytics ruleset with a single request.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/rule_bulk_create_response',\n  $defs: {\n    rule_bulk_create_response: {\n      type: 'object',\n      properties: {\n        rules: {\n          type: 'array',\n          description: 'A list of rules.',\n          items: {\n            $ref: '#/$defs/rum_rule'\n          }\n        },\n        ruleset: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The Web Analytics ruleset identifier.'\n            },\n            enabled: {\n              type: 'boolean',\n              description: 'Whether the ruleset is enabled.'\n            },\n            zone_name: {\n              type: 'string'\n            },\n            zone_tag: {\n              type: 'string',\n              description: 'The zone identifier.'\n            }\n          }\n        }\n      }\n    },\n    rum_rule: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The Web Analytics rule identifier.'\n        },\n        created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        host: {\n          type: 'string',\n          description: 'The hostname the rule will be applied to.'\n        },\n        inclusive: {\n          type: 'boolean',\n          description: 'Whether the rule includes or excludes traffic from being measured.'\n        },\n        is_paused: {\n          type: 'boolean',\n          description: 'Whether the rule is paused or not.'\n        },\n        paths: {\n          type: 'array',\n          description: 'The paths the rule will be applied to.',\n          items: {\n            type: 'string'\n          }\n        },\n        priority: {\n          type: 'number'\n        }\n      }\n    }\n  }\n}\n```",
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
      delete_rules: {
        type: 'array',
        description: 'A list of rule identifiers to delete.',
        items: {
          type: 'string',
          description: 'The Web Analytics rule identifier.',
        },
      },
      rules: {
        type: 'array',
        description: 'A list of rules to create or update.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'The Web Analytics rule identifier.',
            },
            host: {
              type: 'string',
            },
            inclusive: {
              type: 'boolean',
            },
            is_paused: {
              type: 'boolean',
            },
            paths: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
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
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ruleset_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.rum.rules.bulkCreate(ruleset_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
