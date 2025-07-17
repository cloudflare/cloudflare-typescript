// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/email/routing/rules',
  operationId: 'email-routing-routing-rules-list-routing-rules',
};

export const tool: Tool = {
  name: 'list_email_routing_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists existing routing rules.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/email_routing_rule'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    email_routing_rule: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Routing rule identifier.'\n        },\n        actions: {\n          type: 'array',\n          description: 'List actions patterns.',\n          items: {\n            $ref: '#/$defs/action'\n          }\n        },\n        enabled: {\n          type: 'string',\n          description: 'Routing rule status.',\n          enum: [            true,\n            false\n          ]\n        },\n        matchers: {\n          type: 'array',\n          description: 'Matching patterns to forward to your actions.',\n          items: {\n            $ref: '#/$defs/matcher'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Routing rule name.'\n        },\n        priority: {\n          type: 'number',\n          description: 'Priority of the routing rule.'\n        },\n        tag: {\n          type: 'string',\n          description: 'Routing rule tag. (Deprecated, replaced by routing rule identifier)'\n        }\n      }\n    },\n    action: {\n      type: 'object',\n      description: 'Actions pattern.',\n      properties: {\n        type: {\n          type: 'string',\n          description: 'Type of supported action.',\n          enum: [            'drop',\n            'forward',\n            'worker'\n          ]\n        },\n        value: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'Value for action.'\n          }\n        }\n      },\n      required: [        'type'\n      ]\n    },\n    matcher: {\n      type: 'object',\n      description: 'Matching pattern to forward your actions.',\n      properties: {\n        type: {\n          type: 'string',\n          description: 'Type of matcher.',\n          enum: [            'all',\n            'literal'\n          ]\n        },\n        field: {\n          type: 'string',\n          description: 'Field for type matcher.',\n          enum: [            'to'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'Value for matcher.'\n        }\n      },\n      required: [        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      enabled: {
        type: 'string',
        description: 'Filter by enabled routing rules.',
        enum: [true, false],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of results per page.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.emailRouting.rules.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
