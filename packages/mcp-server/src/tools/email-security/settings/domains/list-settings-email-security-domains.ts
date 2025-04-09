// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.domains',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_settings_email_security_domains',
  description: 'Lists, searches, and sorts an account’s email domains.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      active_delivery_mode: {
        type: 'string',
        description: 'Filters response to domains with the currently active delivery mode.',
        enum: ['DIRECT', 'BCC', 'JOURNAL', 'API', 'RETRO_SCAN'],
      },
      allowed_delivery_mode: {
        type: 'string',
        description: 'Filters response to domains with the provided delivery mode.',
        enum: ['DIRECT', 'BCC', 'JOURNAL', 'API', 'RETRO_SCAN'],
      },
      direction: {
        type: 'string',
        description: 'The sorting direction.',
        enum: ['asc', 'desc'],
      },
      domain: {
        type: 'array',
        description: 'Filters results by the provided domains, allowing for multiple occurrences.',
        items: {
          type: 'string',
        },
      },
      order: {
        type: 'string',
        description: 'The field to sort by.',
        enum: ['domain', 'created_at'],
      },
      page: {
        type: 'integer',
        description: 'The page number of paginated results.',
      },
      per_page: {
        type: 'integer',
        description: 'The number of results per page.',
      },
      search: {
        type: 'string',
        description:
          'Allows searching in multiple properties of a record simultaneously.\nThis parameter is intended for human users, not automation. Its exact\nbehavior is intentionally left unspecified and is subject to change\nin the future.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailSecurity.settings.domains.list(body);
};

export default { metadata, tool, handler };
