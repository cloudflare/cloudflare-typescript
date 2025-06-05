// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.packages.rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}',
  operationId: 'waf-rules-get-a-waf-rule',
};

export const tool: Tool = {
  name: 'get_packages_waf_firewall_rules',
  description:
    'Fetches the details of a WAF rule in a WAF package.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(await client.firewall.waf.packages.rules.get(rule_id, body));
};

export default { metadata, tool, handler };
