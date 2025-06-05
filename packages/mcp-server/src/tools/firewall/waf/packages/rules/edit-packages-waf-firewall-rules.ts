// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.packages.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}',
  operationId: 'waf-rules-update-a-waf-rule',
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
        description: 'Defines an identifier of a schema.',
      },
      package_id: {
        type: 'string',
        description: 'Defines the unique identifier of a WAF package.',
      },
      rule_id: {
        type: 'string',
        description: 'Defines the unique identifier of a WAF package.',
      },
      mode: {
        type: 'string',
        description:
          'Defines the mode/action of the rule when triggered. You must use a value from the `allowed_modes` array of the current rule.',
        enum: ['default', 'disable', 'simulate', 'block', 'challenge', 'on', 'off'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(await client.firewall.waf.packages.rules.edit(rule_id, body));
};

export default { metadata, tool, handler };
