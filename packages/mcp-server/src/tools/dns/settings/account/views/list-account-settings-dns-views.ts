// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.settings.account.views',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_account_settings_dns_views',
  description: 'List DNS Internal Views for an Account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      direction: {
        type: 'string',
        description: 'Direction to order DNS views in.',
        enum: ['asc', 'desc'],
      },
      match: {
        type: 'string',
        description:
          'Whether to match all search requirements or at least one (any). If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.',
        enum: ['any', 'all'],
      },
      name: {
        type: 'object',
        properties: {
          contains: {
            type: 'string',
            description: 'Substring of the DNS view name.\n',
          },
          endswith: {
            type: 'string',
            description: 'Suffix of the DNS view name.\n',
          },
          exact: {
            type: 'string',
            description: 'Exact value of the DNS view name.\n',
          },
          startswith: {
            type: 'string',
            description: 'Prefix of the DNS view name.\n',
          },
        },
        required: [],
      },
      order: {
        type: 'string',
        description: 'Field to order DNS views by.',
        enum: ['name', 'created_on', 'modified_on'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of DNS views per page.',
      },
      zone_id: {
        type: 'string',
        description: 'A zone ID that exists in the zones list for the view.\n',
      },
      zone_name: {
        type: 'string',
        description: 'A zone name that exists in the zones list for the view.\n',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dns.settings.account.views.list(body);
};

export default { metadata, tool, handler };
