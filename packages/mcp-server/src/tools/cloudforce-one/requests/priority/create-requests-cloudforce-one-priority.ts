// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.priority',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cloudforce-one/requests/priority/new',
  operationId: 'cloudforce-one-priority-new',
};

export const tool: Tool = {
  name: 'create_requests_cloudforce_one_priority',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a New Priority Intelligence Requirement\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/priority'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    priority: {\n      type: 'object',\n      title: 'Priority Item',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID.'\n        },\n        created: {\n          type: 'string',\n          description: 'Priority creation time.',\n          format: 'date-time'\n        },\n        labels: {\n          type: 'array',\n          title: 'Labels',\n          description: 'List of labels.',\n          items: {\n            $ref: '#/$defs/label'\n          }\n        },\n        priority: {\n          type: 'integer',\n          description: 'Priority.'\n        },\n        requirement: {\n          type: 'string',\n          description: 'Requirement.'\n        },\n        tlp: {\n          type: 'string',\n          title: 'TLP',\n          description: 'The CISA defined Traffic Light Protocol (TLP).',\n          enum: [            'clear',\n            'amber',\n            'amber-strict',\n            'green',\n            'red'\n          ]\n        },\n        updated: {\n          type: 'string',\n          description: 'Priority last updated time.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created',\n        'labels',\n        'priority',\n        'requirement',\n        'tlp',\n        'updated'\n      ]\n    },\n    label: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      labels: {
        type: 'array',
        title: 'Labels',
        description: 'List of labels.',
        items: {
          $ref: '#/$defs/label',
        },
      },
      priority: {
        type: 'integer',
        description: 'Priority.',
      },
      requirement: {
        type: 'string',
        description: 'Requirement.',
      },
      tlp: {
        type: 'string',
        title: 'TLP',
        description: 'The CISA defined Traffic Light Protocol (TLP).',
        enum: ['clear', 'amber', 'amber-strict', 'green', 'red'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'labels', 'priority', 'requirement', 'tlp'],
    $defs: {
      label: {
        type: 'string',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.cloudforceOne.requests.priority.create(body)),
  );
};

export default { metadata, tool, handler };
