// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.packages',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_waf_firewall_packages',
  description:
    'Fetches WAF packages for a zone.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      direction: {
        type: 'string',
        description: 'The direction used to sort returned packages.',
        enum: ['asc', 'desc'],
      },
      match: {
        type: 'string',
        description:
          'When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.',
        enum: ['any', 'all'],
      },
      name: {
        type: 'string',
        description: 'The name of the WAF package.',
      },
      order: {
        type: 'string',
        description: 'The field used to sort returned packages.',
        enum: ['name'],
      },
      page: {
        type: 'number',
        description: 'The page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'The number of packages per page.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.firewall.waf.packages.list(body);
};

export default { metadata, tool, handler };
