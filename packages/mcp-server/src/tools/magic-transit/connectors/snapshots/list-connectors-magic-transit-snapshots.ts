// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors.snapshots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/connectors/{connector_id}/telemetry/snapshots',
  operationId: 'mconn-connector-telemetry-snapshots-list',
};

export const tool: Tool = {
  name: 'list_connectors_magic_transit_snapshots',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Snapshots\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number'\n        },\n        items: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              a: {\n                type: 'number',\n                description: 'Time the Snapshot was collected (seconds since the Unix epoch)'\n              },\n              t: {\n                type: 'number',\n                description: 'Time the Snapshot was recorded (seconds since the Unix epoch)'\n              }\n            },\n            required: [              'a',\n              't'\n            ]\n          }\n        },\n        cursor: {\n          type: 'string'\n        }\n      },\n      required: [        'count',\n        'items'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    },\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'number'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
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
      from: {
        type: 'number',
      },
      to: {
        type: 'number',
      },
      cursor: {
        type: 'string',
      },
      limit: {
        type: 'number',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'connector_id', 'from', 'to'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { connector_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.magicTransit.connectors.snapshots.list(connector_id, body)),
  );
};

export default { metadata, tool, handler };
