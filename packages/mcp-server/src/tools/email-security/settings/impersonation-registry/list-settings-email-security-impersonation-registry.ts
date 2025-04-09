// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.impersonation_registry',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_settings_email_security_impersonation_registry',
  description: 'Lists, searches, and sorts entries in the impersonation registry.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      direction: {
        type: 'string',
        description: 'The sorting direction.',
        enum: ['asc', 'desc'],
      },
      order: {
        type: 'string',
        description: 'The field to sort by.',
        enum: ['name', 'email', 'created_at'],
      },
      page: {
        type: 'integer',
        description: 'The page number of paginated results.',
      },
      per_page: {
        type: 'integer',
        description: 'The number of results per page.',
      },
      provenance: {
        type: 'string',
        enum: ['A1S_INTERNAL', 'SNOOPY-CASB_OFFICE_365', 'SNOOPY-OFFICE_365', 'SNOOPY-GOOGLE_DIRECTORY'],
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
  return client.emailSecurity.settings.impersonationRegistry.list(body);
};

export default { metadata, tool, handler };
