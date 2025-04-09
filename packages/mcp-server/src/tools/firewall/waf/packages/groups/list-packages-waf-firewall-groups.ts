// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.packages.groups',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_packages_waf_firewall_groups',
  description:
    'Fetches the WAF rule groups in a WAF package.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      package_id: {
        type: 'string',
        description: 'The unique identifier of a WAF package.',
      },
      direction: {
        type: 'string',
        description: 'The direction used to sort returned rule groups.',
        enum: ['asc', 'desc'],
      },
      match: {
        type: 'string',
        description:
          'When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.',
        enum: ['any', 'all'],
      },
      mode: {
        type: 'string',
        description:
          'The state of the rules contained in the rule group. When `on`, the rules in the group are configurable/usable.',
        enum: ['on', 'off'],
      },
      name: {
        type: 'string',
        description: 'The name of the rule group.',
      },
      order: {
        type: 'string',
        description: 'The field used to sort returned rule groups.',
        enum: ['mode', 'rules_count'],
      },
      page: {
        type: 'number',
        description: 'The page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'The number of rule groups per page.',
      },
      rules_count: {
        type: 'number',
        description: 'The number of rules in the current rule group.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { package_id, ...body } = args;
  return client.firewall.waf.packages.groups.list(package_id, body);
};

export default { metadata, tool, handler };
