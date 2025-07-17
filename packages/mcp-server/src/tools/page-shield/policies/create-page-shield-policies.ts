// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.policies',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/page_shield/policies',
  operationId: 'page-shield-create-policy',
};

export const tool: Tool = {
  name: 'create_page_shield_policies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a Page Shield policy.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        action: {\n          type: 'string',\n          description: 'The action to take if the expression matches',\n          enum: [            'allow',\n            'log'\n          ]\n        },\n        description: {\n          type: 'string',\n          description: 'A description for the policy'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Whether the policy is enabled'\n        },\n        expression: {\n          type: 'string',\n          description: 'The expression which must match for the policy to be applied, using the Cloudflare Firewall rule expression syntax'\n        },\n        value: {\n          type: 'string',\n          description: 'The policy which will be applied'\n        }\n      },\n      required: [        'id',\n        'action',\n        'description',\n        'enabled',\n        'expression',\n        'value'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    }\n  },\n  required: [    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      action: {
        type: 'string',
        description: 'The action to take if the expression matches',
        enum: ['allow', 'log'],
      },
      description: {
        type: 'string',
        description: 'A description for the policy',
      },
      enabled: {
        type: 'boolean',
        description: 'Whether the policy is enabled',
      },
      expression: {
        type: 'string',
        description:
          'The expression which must match for the policy to be applied, using the Cloudflare Firewall rule expression syntax',
      },
      value: {
        type: 'string',
        description: 'The policy which will be applied',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'action', 'description', 'enabled', 'expression', 'value'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.pageShield.policies.create(body)));
};

export default { metadata, tool, handler };
