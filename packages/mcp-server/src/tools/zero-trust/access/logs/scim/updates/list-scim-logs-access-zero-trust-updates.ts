// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.logs.scim.updates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/logs/scim/updates',
  operationId: 'access-scim-update-logs-list-access-scim-update-logs',
};

export const tool: Tool = {
  name: 'list_scim_logs_access_zero_trust_updates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists Access SCIM update logs that maintain a record of updates made to User and Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          cf_resource_id: {\n            type: 'string',\n            description: 'The unique Cloudflare-generated Id of the SCIM resource.'\n          },\n          error_description: {\n            type: 'string',\n            description: 'The error message which is generated when the status of the SCIM request is \\'FAILURE\\'.'\n          },\n          idp_id: {\n            type: 'string',\n            description: 'The unique Id of the IdP that has SCIM enabled.'\n          },\n          idp_resource_id: {\n            type: 'string',\n            description: 'The IdP-generated Id of the SCIM resource.'\n          },\n          logged_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          request_body: {\n            type: 'string',\n            description: 'The JSON-encoded string body of the SCIM request.'\n          },\n          request_method: {\n            type: 'string',\n            description: 'The request method of the SCIM request.'\n          },\n          resource_group_name: {\n            type: 'string',\n            description: 'The display name of the SCIM Group resource if it exists.'\n          },\n          resource_type: {\n            type: 'string',\n            description: 'The resource type of the SCIM request.'\n          },\n          resource_user_email: {\n            type: 'string',\n            description: 'The email address of the SCIM User resource if it exists.'\n          },\n          status: {\n            type: 'string',\n            description: 'The status of the SCIM request.'\n          }\n        },\n        required: []\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      idp_id: {
        type: 'array',
        description: 'The unique Id of the IdP that has SCIM enabled.',
        items: {
          type: 'string',
        },
      },
      cf_resource_id: {
        type: 'string',
        description: 'The unique Cloudflare-generated Id of the SCIM resource.',
      },
      direction: {
        type: 'string',
        description: 'The chronological order used to sort the logs.',
        enum: ['desc', 'asc'],
      },
      idp_resource_id: {
        type: 'string',
        description: 'The IdP-generated Id of the SCIM resource.',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of update logs to retrieve.',
      },
      request_method: {
        type: 'array',
        description: 'The request method of the SCIM request.',
        items: {
          type: 'string',
          enum: ['DELETE', 'PATCH', 'POST', 'PUT'],
        },
      },
      resource_group_name: {
        type: 'string',
        description: 'The display name of the SCIM Group resource.',
      },
      resource_type: {
        type: 'array',
        description: 'The resource type of the SCIM request.',
        items: {
          type: 'string',
          enum: ['USER', 'GROUP'],
        },
      },
      resource_user_email: {
        type: 'string',
        description: 'The email address of the SCIM User resource.',
      },
      since: {
        type: 'string',
        description: 'the timestamp of the earliest update log.',
        format: 'date-time',
      },
      status: {
        type: 'array',
        description: 'The status of the SCIM request.',
        items: {
          type: 'string',
          enum: ['FAILURE', 'SUCCESS'],
        },
      },
      until: {
        type: 'string',
        description: 'the timestamp of the most-recent update log.',
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
  const response = await client.zeroTrust.access.logs.scim.updates.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
