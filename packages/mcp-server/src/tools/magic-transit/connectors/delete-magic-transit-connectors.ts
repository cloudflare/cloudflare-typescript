// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/magic/connectors/{connector_id}',
  operationId: 'mconn-connector-delete',
};

export const tool: Tool = {
  name: 'delete_magic_transit_connectors',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRemove a connector from your account\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        activated: {\n          type: 'boolean'\n        },\n        interrupt_window_duration_hours: {\n          type: 'number'\n        },\n        interrupt_window_hour_of_day: {\n          type: 'number'\n        },\n        last_updated: {\n          type: 'string'\n        },\n        notes: {\n          type: 'string'\n        },\n        timezone: {\n          type: 'string'\n        },\n        device: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            serial_number: {\n              type: 'string'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        last_heartbeat: {\n          type: 'string'\n        },\n        last_seen_version: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'activated',\n        'interrupt_window_duration_hours',\n        'interrupt_window_hour_of_day',\n        'last_updated',\n        'notes',\n        'timezone'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier',
      },
      connector_id: {
        type: 'string',
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
  const { connector_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.magicTransit.connectors.delete(connector_id, body)),
  );
};

export default { metadata, tool, handler };
