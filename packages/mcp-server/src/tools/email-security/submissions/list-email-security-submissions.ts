// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.submissions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_email_security_submissions',
  description: 'This endpoint returns information for submissions to made to reclassify emails.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      end: {
        type: 'string',
        description: 'The end of the search date range.\nDefaults to `now`.',
        format: 'date-time',
      },
      page: {
        type: 'integer',
        description: 'The page number of paginated results.',
      },
      per_page: {
        type: 'integer',
        description: 'The number of results per page.',
      },
      start: {
        type: 'string',
        description: 'The beginning of the search date range.\nDefaults to `now - 30 days`.',
        format: 'date-time',
      },
      submission_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['TEAM', 'USER'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailSecurity.submissions.list(body);
};

export default { metadata, tool, handler };
