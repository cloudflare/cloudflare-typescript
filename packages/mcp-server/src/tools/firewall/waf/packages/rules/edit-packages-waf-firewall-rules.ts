// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.packages.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_packages_waf_firewall_rules',
  description:
    'Updates a WAF rule. You can only update the mode/action of the rule.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',
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
      rule_id: {
        type: 'string',
        description: 'The unique identifier of a WAF package.',
      },
      mode: {
        type: 'string',
        description:
          'The mode/action of the rule when triggered. You must use a value from the `allowed_modes` array of the current rule.',
        enum: ['default', 'disable', 'simulate', 'block', 'challenge', 'on', 'off'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.firewall.waf.packages.rules.edit(rule_id, body);
};

export default { metadata, tool, handler };
