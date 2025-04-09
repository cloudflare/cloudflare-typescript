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
  name: 'get_packages_waf_firewall_groups',
  description:
    'Fetches the details of a WAF rule group.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',
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
      group_id: {
        type: 'string',
        description: 'The unique identifier of a WAF package.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { group_id, ...body } = args;
  return client.firewall.waf.packages.groups.get(group_id, body);
};

export default { metadata, tool, handler };
