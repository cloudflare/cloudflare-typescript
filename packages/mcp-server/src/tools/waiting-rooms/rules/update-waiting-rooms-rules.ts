// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'waiting_rooms.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules',
  operationId: 'waiting-room-replace-waiting-room-rules',
};

export const tool: Tool = {
  name: 'update_waiting_rooms_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOnly available for the Waiting Room Advanced subscription. Replaces all rules for a waiting room.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/waiting_room_rule'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    waiting_room_rule: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the rule.'\n        },\n        action: {\n          type: 'string',\n          description: 'The action to take when the expression matches.',\n          enum: [            'bypass_waiting_room'\n          ]\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the rule.'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'When set to true, the rule is enabled.'\n        },\n        expression: {\n          type: 'string',\n          description: 'Criteria defining when there is a match for the current rule.'\n        },\n        last_updated: {\n          type: 'string',\n          format: 'date-time'\n        },\n        version: {\n          type: 'string',\n          description: 'The version of the rule.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      waiting_room_id: {
        type: 'string',
      },
      rules: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            action: {
              type: 'string',
              description: 'The action to take when the expression matches.',
              enum: ['bypass_waiting_room'],
            },
            expression: {
              type: 'string',
              description: 'Criteria defining when there is a match for the current rule.',
            },
            description: {
              type: 'string',
              description: 'The description of the rule.',
            },
            enabled: {
              type: 'boolean',
              description: 'When set to true, the rule is enabled.',
            },
          },
          required: ['action', 'expression'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { waiting_room_id, ...body } = args as any;
  const response = await client.waitingRooms.rules.update(waiting_room_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
