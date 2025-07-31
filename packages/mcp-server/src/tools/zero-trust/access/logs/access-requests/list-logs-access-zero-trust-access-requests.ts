// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.logs.access_requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/logs/access_requests',
  operationId: 'access-authentication-logs-get-access-authentication-logs',
};

export const tool: Tool = {
  name: 'list_logs_access_zero_trust_access_requests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets a list of Access authentication audit logs for an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/access_request'\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    access_request: {\n      type: 'object',\n      properties: {\n        action: {\n          type: 'string',\n          description: 'The event that occurred, such as a login attempt.'\n        },\n        allowed: {\n          type: 'boolean',\n          description: 'The result of the authentication event.'\n        },\n        app_domain: {\n          type: 'string',\n          description: 'The URL of the Access application.'\n        },\n        app_uid: {\n          type: 'string',\n          description: 'The unique identifier for the Access application.'\n        },\n        connection: {\n          type: 'string',\n          description: 'The IdP used to authenticate.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        ip_address: {\n          type: 'string',\n          description: 'The IP address of the authenticating user.'\n        },\n        ray_id: {\n          type: 'string',\n          description: 'The unique identifier for the request to Cloudflare.'\n        },\n        user_email: {\n          type: 'string',\n          description: 'The email address of the authenticating user.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      direction: {
        type: 'string',
        description: 'The chronological sorting order for the logs.',
        enum: ['desc', 'asc'],
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of log entries to retrieve.',
      },
      since: {
        type: 'string',
        description: 'The earliest event timestamp to query.',
        format: 'date-time',
      },
      until: {
        type: 'string',
        description: 'The latest event timestamp to query.',
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.access.logs.accessRequests.list(body)),
  );
};

export default { metadata, tool, handler };
