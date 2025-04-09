// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.packages.rules',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_packages_waf_firewall_rules',
  description:
    'Fetches WAF rules in a WAF package.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',
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
      description: {
        type: 'string',
        description: 'The public description of the WAF rule.',
      },
      direction: {
        type: 'string',
        description: 'The direction used to sort returned rules.',
        enum: ['asc', 'desc'],
      },
      group_id: {
        type: 'string',
        description: 'The unique identifier of the rule group.',
      },
      match: {
        type: 'string',
        description:
          'When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.',
        enum: ['any', 'all'],
      },
      mode: {
        type: 'string',
        description: 'The action/mode a rule has been overridden to perform.',
        enum: ['DIS', 'CHL', 'BLK', 'SIM'],
      },
      order: {
        type: 'string',
        description: 'The field used to sort returned rules.',
        enum: ['priority', 'group_id', 'description'],
      },
      page: {
        type: 'number',
        description: 'The page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'The number of rules per page.',
      },
      priority: {
        type: 'string',
        description: 'The order in which the individual WAF rule is executed within its rule group.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { package_id, ...body } = args;
  return client.firewall.waf.packages.rules.list(package_id, body);
};

export default { metadata, tool, handler };
