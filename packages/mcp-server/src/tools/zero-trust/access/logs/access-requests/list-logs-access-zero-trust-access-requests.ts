// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.logs.access_requests',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_logs_access_zero_trust_access_requests',
  description: 'Gets a list of Access authentication audit logs for an account.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.access.logs.accessRequests.list(body);
};

export default { metadata, tool, handler };
