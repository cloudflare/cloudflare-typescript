// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.logs.scim.updates',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_scim_logs_access_zero_trust_updates',
  description:
    'Lists Access SCIM update logs that maintain a record of updates made to User and Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.access.logs.scim.updates.list(body);
};

export default { metadata, tool, handler };
