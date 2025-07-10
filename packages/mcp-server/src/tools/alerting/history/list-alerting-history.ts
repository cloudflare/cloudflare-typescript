// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'alerting.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/alerting/v3/history',
  operationId: 'notification-history-list-history',
};

export const tool: Tool = {
  name: 'list_alerting_history',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets a list of history records for notifications sent to an account. The records are displayed for last `x` number of days based on the zone plan (free = 30, pro = 30, biz = 30, ent = 90).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/history'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    history: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID'\n        },\n        alert_body: {\n          type: 'string',\n          description: 'Message body included in the notification sent.'\n        },\n        alert_type: {\n          type: 'string',\n          description: 'Type of notification that has been dispatched.'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the notification policy (if present).'\n        },\n        mechanism: {\n          type: 'string',\n          description: 'The mechanism to which the notification has been dispatched.'\n        },\n        mechanism_type: {\n          type: 'string',\n          description: 'The type of mechanism to which the notification has been dispatched. This can be email/pagerduty/webhook based on the mechanism configured.',\n          enum: [            'email',\n            'pagerduty',\n            'webhook'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the policy.'\n        },\n        policy_id: {\n          type: 'string',\n          description: 'The unique identifier of a notification policy'\n        },\n        sent: {\n          type: 'string',\n          description: 'Timestamp of when the notification was dispatched in ISO 8601 format.',\n          format: 'date-time'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account id',
      },
      before: {
        type: 'string',
        description:
          'Limit the returned results to history records older than the specified date. This must be a timestamp that conforms to RFC3339.',
        format: 'date-time',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page.',
      },
      since: {
        type: 'string',
        description:
          'Limit the returned results to history records newer than the specified date. This must be a timestamp that conforms to RFC3339.',
        format: 'date-time',
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
  const body = args as any;
  const response = await client.alerting.history.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
