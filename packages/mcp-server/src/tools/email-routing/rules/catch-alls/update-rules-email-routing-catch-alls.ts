// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.rules.catch_alls',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/email/routing/rules/catch_all',
  operationId: 'email-routing-routing-rules-update-catch-all-rule',
};

export const tool: Tool = {
  name: 'update_rules_email_routing_catch_alls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEnable or disable catch-all routing rule, or change action to forward to specific destination address.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Routing rule identifier.'\n        },\n        actions: {\n          type: 'array',\n          description: 'List actions for the catch-all routing rule.',\n          items: {\n            $ref: '#/$defs/catch_all_action'\n          }\n        },\n        enabled: {\n          type: 'string',\n          description: 'Routing rule status.',\n          enum: [            true,\n            false\n          ]\n        },\n        matchers: {\n          type: 'array',\n          description: 'List of matchers for the catch-all routing rule.',\n          items: {\n            $ref: '#/$defs/catch_all_matcher'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Routing rule name.'\n        },\n        tag: {\n          type: 'string',\n          description: 'Routing rule tag. (Deprecated, replaced by routing rule identifier)'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    catch_all_action: {\n      type: 'object',\n      description: 'Action for the catch-all routing rule.',\n      properties: {\n        type: {\n          type: 'string',\n          description: 'Type of action for catch-all rule.',\n          enum: [            'drop',\n            'forward',\n            'worker'\n          ]\n        },\n        value: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'Input value for action.'\n          }\n        }\n      },\n      required: [        'type'\n      ]\n    },\n    catch_all_matcher: {\n      type: 'object',\n      description: 'Matcher for catch-all routing rule.',\n      properties: {\n        type: {\n          type: 'string',\n          description: 'Type of matcher. Default is \\'all\\'.',\n          enum: [            'all'\n          ]\n        }\n      },\n      required: [        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      actions: {
        type: 'array',
        description: 'List actions for the catch-all routing rule.',
        items: {
          $ref: '#/$defs/catch_all_action',
        },
      },
      matchers: {
        type: 'array',
        description: 'List of matchers for the catch-all routing rule.',
        items: {
          $ref: '#/$defs/catch_all_matcher',
        },
      },
      enabled: {
        type: 'string',
        description: 'Routing rule status.',
        enum: [true, false],
      },
      name: {
        type: 'string',
        description: 'Routing rule name.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'actions', 'matchers'],
    $defs: {
      catch_all_action: {
        type: 'object',
        description: 'Action for the catch-all routing rule.',
        properties: {
          type: {
            type: 'string',
            description: 'Type of action for catch-all rule.',
            enum: ['drop', 'forward', 'worker'],
          },
          value: {
            type: 'array',
            items: {
              type: 'string',
              description: 'Input value for action.',
            },
          },
        },
        required: ['type'],
      },
      catch_all_matcher: {
        type: 'object',
        description: 'Matcher for catch-all routing rule.',
        properties: {
          type: {
            type: 'string',
            description: "Type of matcher. Default is 'all'.",
            enum: ['all'],
          },
        },
        required: ['type'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.emailRouting.rules.catchAlls.update(body)),
  );
};

export default { metadata, tool, handler };
