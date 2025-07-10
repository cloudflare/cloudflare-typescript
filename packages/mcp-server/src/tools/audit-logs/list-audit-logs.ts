// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'audit_logs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/audit_logs',
  operationId: 'audit-logs-get-account-audit-logs',
};

export const tool: Tool = {
  name: 'list_audit_logs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets a list of audit logs for an account. Can be filtered by who made the change, on which zone, and the timeframe of the change.\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      type: 'object',\n      properties: {\n        errors: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/response_info'\n          }\n        },\n        messages: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/response_info'\n          }\n        },\n        result: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/audit_log'\n          }\n        },\n        success: {\n          type: 'boolean'\n        }\n      },\n      required: []\n    },\n    {\n      type: 'object',\n      properties: {\n        errors: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/response_info'\n          }\n        },\n        messages: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/response_info'\n          }\n        },\n        success: {\n          type: 'string',\n          description: 'Whether the API call was successful',\n          enum: [            true\n          ]\n        }\n      },\n      required: [        'errors',\n        'messages',\n        'success'\n      ]\n    }\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    audit_log: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A string that uniquely identifies the audit log.'\n        },\n        action: {\n          type: 'object',\n          properties: {\n            result: {\n              type: 'boolean',\n              description: 'A boolean that indicates if the action attempted was successful.'\n            },\n            type: {\n              type: 'string',\n              description: 'A short string that describes the action that was performed.'\n            }\n          },\n          required: []\n        },\n        actor: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the actor that performed the action. If a user performed the action, this will be their User ID.'\n            },\n            email: {\n              type: 'string',\n              description: 'The email of the user that performed the action.'\n            },\n            ip: {\n              type: 'string',\n              description: 'The IP address of the request that performed the action.'\n            },\n            type: {\n              type: 'string',\n              description: 'The type of actor, whether a User, Cloudflare Admin, or an Automated System.',\n              enum: [                'user',\n                'admin',\n                'Cloudflare'\n              ]\n            }\n          },\n          required: []\n        },\n        interface: {\n          type: 'string',\n          description: 'The source of the event.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'An object which can lend more context to the action being logged. This is a flexible value and varies between different actions.'\n        },\n        newValue: {\n          type: 'string',\n          description: 'The new value of the resource that was modified.'\n        },\n        oldValue: {\n          type: 'string',\n          description: 'The value of the resource before it was modified.'\n        },\n        owner: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifier'\n            }\n          },\n          required: []\n        },\n        resource: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'An identifier for the resource that was affected by the action.'\n            },\n            type: {\n              type: 'string',\n              description: 'A short string that describes the resource that was affected by the action.'\n            }\n          },\n          required: []\n        },\n        when: {\n          type: 'string',\n          description: 'A UTC RFC3339 timestamp that specifies when the action being logged occured.',\n          format: 'date-time'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      id: {
        type: 'string',
        description: 'Finds a specific log by its ID.',
      },
      action: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            description: 'Filters by the action type.',
          },
        },
        required: [],
      },
      actor: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'Filters by the email address of the actor that made the change.',
          },
          ip: {
            type: 'string',
            description:
              'Filters by the IP address of the request that made the change by specific IP address or valid CIDR Range.',
          },
        },
        required: [],
      },
      before: {
        anyOf: [
          {
            type: 'string',
            description:
              'Limits the returned results to logs older than the specified date. A `full-date` that conforms to RFC3339.',
            format: 'date',
          },
          {
            type: 'string',
            description:
              'Limits the returned results to logs older than the specified date. A `date-time` that conforms to RFC3339.',
            format: 'date-time',
          },
        ],
        description:
          'Limits the returned results to logs older than the specified date. A `full-date` that conforms to RFC3339.',
      },
      direction: {
        type: 'string',
        description: 'Changes the direction of the chronological sorting.',
        enum: ['desc', 'asc'],
      },
      export: {
        type: 'boolean',
        description: 'Indicates that this request is an export of logs in CSV format.',
      },
      hide_user_logs: {
        type: 'boolean',
        description: 'Indicates whether or not to hide user level audit logs.',
      },
      page: {
        type: 'number',
        description: 'Defines which page of results to return.',
      },
      per_page: {
        type: 'number',
        description: 'Sets the number of results to return per page.',
      },
      since: {
        anyOf: [
          {
            type: 'string',
            description:
              'Limits the returned results to logs newer than the specified date. A `full-date` that conforms to RFC3339.',
            format: 'date',
          },
          {
            type: 'string',
            description:
              'Limits the returned results to logs newer than the specified date. A `date-time` that conforms to RFC3339.',
            format: 'date-time',
          },
        ],
        description:
          'Limits the returned results to logs newer than the specified date. A `full-date` that conforms to RFC3339.',
      },
      zone: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Filters by the name of the zone associated to the change.',
          },
        },
        required: [],
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
  const response = await client.auditLogs.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
