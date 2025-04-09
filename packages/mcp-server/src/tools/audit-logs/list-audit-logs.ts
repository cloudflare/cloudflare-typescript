// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'audit_logs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_audit_logs',
  description:
    'Gets a list of audit logs for an account. Can be filtered by who made the change, on which zone, and the timeframe of the change.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.auditLogs.list(body);
};

export default { metadata, tool, handler };
