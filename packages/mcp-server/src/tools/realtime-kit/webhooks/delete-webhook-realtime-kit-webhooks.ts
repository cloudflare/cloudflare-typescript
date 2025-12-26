// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.webhooks',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}',
  operationId: 'deleteWebhook',
};

export const tool: Tool = {
  name: 'delete_webhook_realtime_kit_webhooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRemoves a webhook for the given webhook ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/webhook_delete_webhook_response',\n  $defs: {\n    webhook_delete_webhook_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'ID of the webhook'\n            },\n            created_at: {\n              type: 'string',\n              description: 'Timestamp when this webhook was created',\n              format: 'date-time'\n            },\n            enabled: {\n              type: 'boolean',\n              description: 'Set to true if the webhook is active'\n            },\n            events: {\n              type: 'array',\n              description: 'Events this webhook will send updates for',\n              items: {\n                type: 'string',\n                enum: [                  'meeting.started',\n                  'meeting.ended',\n                  'meeting.participantJoined',\n                  'meeting.participantLeft',\n                  'meeting.chatSynced',\n                  'recording.statusUpdate',\n                  'livestreaming.statusUpdate',\n                  'meeting.transcript',\n                  'meeting.summary'\n                ]\n              }\n            },\n            name: {\n              type: 'string',\n              description: 'Name of the webhook'\n            },\n            updated_at: {\n              type: 'string',\n              description: 'Timestamp when this webhook was updated',\n              format: 'date-time'\n            },\n            url: {\n              type: 'string',\n              description: 'URL the webhook will send events to'\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'enabled',\n            'events',\n            'name',\n            'updated_at',\n            'url'\n          ]\n        },\n        success: {\n          type: 'boolean'\n        }\n      },\n      required: [        'data',\n        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      app_id: {
        type: 'string',
        description: 'The app identifier tag.',
      },
      webhook_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'app_id', 'webhook_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { webhook_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.realtimeKit.webhooks.deleteWebhook(webhook_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
