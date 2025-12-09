// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'token_validation.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/token_validation/rules',
  operationId: 'token-validation-rules-create',
};

export const tool: Tool = {
  name: 'create_token_validation_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a token validation rule.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/token_validation_rule',\n  $defs: {\n    token_validation_rule: {\n      type: 'object',\n      description: 'A Token Validation rule that can enforce security policies using JWT Tokens.',\n      properties: {\n        action: {\n          type: 'string',\n          description: 'Action to take on requests that match operations included in `selector` and fail `expression`.',\n          enum: [            'log',\n            'block'\n          ]\n        },\n        description: {\n          type: 'string',\n          description: 'A human-readable description that gives more details than `title`.'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Toggle rule on or off.'\n        },\n        expression: {\n          type: 'string',\n          description: 'Rule expression. Requests that fail to match this expression will be subject to `action`.\\n\\nFor details on expressions, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).\\n'\n        },\n        selector: {\n          type: 'object',\n          description: 'Select operations covered by this rule.\\n\\nFor details on selectors, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).\\n',\n          properties: {\n            exclude: {\n              type: 'array',\n              description: 'Ignore operations that were otherwise included by `include`.',\n              items: {\n                type: 'object',\n                properties: {\n                  operation_ids: {\n                    type: 'array',\n                    description: 'Excluded operation IDs.',\n                    items: {\n                      type: 'string',\n                      description: 'UUID.'\n                    }\n                  }\n                }\n              }\n            },\n            include: {\n              type: 'array',\n              description: 'Select all matching operations.',\n              items: {\n                type: 'object',\n                properties: {\n                  host: {\n                    type: 'array',\n                    description: 'Included hostnames.',\n                    items: {\n                      type: 'string',\n                      description: 'RFC3986-compliant host.'\n                    }\n                  }\n                }\n              }\n            }\n          }\n        },\n        title: {\n          type: 'string',\n          description: 'A human-readable name for the rule.'\n        },\n        id: {\n          type: 'string',\n          description: 'UUID.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        last_updated: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'action',\n        'description',\n        'enabled',\n        'expression',\n        'selector',\n        'title'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      action: {
        type: 'string',
        description:
          'Action to take on requests that match operations included in `selector` and fail `expression`.',
        enum: ['log', 'block'],
      },
      description: {
        type: 'string',
        description: 'A human-readable description that gives more details than `title`.',
      },
      enabled: {
        type: 'boolean',
        description: 'Toggle rule on or off.',
      },
      expression: {
        type: 'string',
        description:
          'Rule expression. Requests that fail to match this expression will be subject to `action`.\n\nFor details on expressions, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).\n',
      },
      selector: {
        type: 'object',
        description:
          'Select operations covered by this rule.\n\nFor details on selectors, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).\n',
        properties: {
          exclude: {
            type: 'array',
            description: 'Ignore operations that were otherwise included by `include`.',
            items: {
              type: 'object',
              properties: {
                operation_ids: {
                  type: 'array',
                  description: 'Excluded operation IDs.',
                  items: {
                    type: 'string',
                    description: 'UUID.',
                  },
                },
              },
            },
          },
          include: {
            type: 'array',
            description: 'Select all matching operations.',
            items: {
              type: 'object',
              properties: {
                host: {
                  type: 'array',
                  description: 'Included hostnames.',
                  items: {
                    type: 'string',
                    description: 'RFC3986-compliant host.',
                  },
                },
              },
            },
          },
        },
      },
      title: {
        type: 'string',
        description: 'A human-readable name for the rule.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'action', 'description', 'enabled', 'expression', 'selector', 'title'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.tokenValidation.rules.create(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
