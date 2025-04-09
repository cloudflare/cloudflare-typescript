// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.investigate',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_email_security_investigate',
  description: 'Returns information for each email that matches the search parameter(s).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      action_log: {
        type: 'boolean',
        description: 'Determines if the message action log is included in the response.',
      },
      alert_id: {
        type: 'string',
      },
      detections_only: {
        type: 'boolean',
        description: 'Determines if the search results will include detections or not.',
      },
      domain: {
        type: 'string',
        description: 'The sender domains the search filters by.',
      },
      end: {
        type: 'string',
        description: 'The end of the search date range.\nDefaults to `now`.',
        format: 'date-time',
      },
      final_disposition: {
        type: 'string',
        description: 'The dispositions the search filters by.',
        enum: ['MALICIOUS', 'SUSPICIOUS', 'SPOOF', 'SPAM', 'BULK', 'NONE'],
      },
      message_action: {
        type: 'string',
        description: 'The message actions the search filters by.',
        enum: ['PREVIEW', 'QUARANTINE_RELEASED', 'MOVED'],
      },
      message_id: {
        type: 'string',
      },
      metric: {
        type: 'string',
      },
      page: {
        type: 'integer',
        description: 'The page number of paginated results.',
      },
      per_page: {
        type: 'integer',
        description: 'The number of results per page.',
      },
      query: {
        type: 'string',
        description:
          'The space-delimited term used in the query. The search is case-insensitive.\n\nThe content of the following email metadata fields are searched:\n* alert_id\n* CC\n* From (envelope_from)\n* From Name\n* final_disposition\n* md5 hash (of any attachment)\n* sha1 hash (of any attachment)\n* sha256 hash (of any attachment)\n* name (of any attachment)\n* Reason\n* Received DateTime (yyyy-mm-ddThh:mm:ss)\n* Sent DateTime (yyyy-mm-ddThh:mm:ss)\n* ReplyTo\n* To (envelope_to)\n* To Name\n* Message-ID\n* smtp_helo_server_ip\n* smtp_previous_hop_ip\n* x_originating_ip\n* Subject',
      },
      recipient: {
        type: 'string',
      },
      sender: {
        type: 'string',
      },
      start: {
        type: 'string',
        description: 'The beginning of the search date range.\nDefaults to `now - 30 days`.',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailSecurity.investigate.list(body);
};

export default { metadata, tool, handler };
