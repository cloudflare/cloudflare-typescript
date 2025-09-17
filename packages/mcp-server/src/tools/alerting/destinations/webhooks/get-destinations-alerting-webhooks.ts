// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'alerting.destinations.webhooks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}',
  operationId: 'notification-webhooks-get-a-webhook',
};

export const tool: Tool = {
  name: 'get_destinations_alerting_webhooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet details for a single webhooks destination.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          message: {\n            type: 'string'\n          },\n          code: {\n            type: 'integer'\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          message: {\n            type: 'string'\n          },\n          code: {\n            type: 'integer'\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/webhooks'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    webhooks: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of a webhook'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp of when the webhook destination was created.',\n          format: 'date-time'\n        },\n        last_failure: {\n          type: 'string',\n          description: 'Timestamp of the last time an attempt to dispatch a notification to this webhook failed.',\n          format: 'date-time'\n        },\n        last_success: {\n          type: 'string',\n          description: 'Timestamp of the last time Cloudflare was able to successfully dispatch a notification using this webhook.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the webhook destination. This will be included in the request body when you receive a webhook notification.'\n        },\n        secret: {\n          type: 'string',\n          description: 'Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supported destinations. Secrets are not returned in any API response body.'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of webhook endpoint.',\n          enum: [            'datadog',\n            'discord',\n            'feishu',\n            'gchat',\n            'generic',\n            'opsgenie',\n            'slack',\n            'splunk'\n          ]\n        },\n        url: {\n          type: 'string',\n          description: 'The POST endpoint to call when dispatching a notification.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account id',
      },
      webhook_id: {
        type: 'string',
        description: 'The unique identifier of a webhook',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'webhook_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { webhook_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.alerting.destinations.webhooks.get(webhook_id, body)),
  );
};

export default { metadata, tool, handler };
