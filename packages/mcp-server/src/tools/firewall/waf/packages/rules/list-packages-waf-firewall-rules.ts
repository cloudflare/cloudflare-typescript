// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.packages.rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/firewall/waf/packages/{package_id}/rules',
  operationId: 'waf-rules-list-waf-rules',
};

export const tool: Tool = {
  name: 'list_packages_waf_firewall_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches WAF rules in a WAF package.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).",
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
      description: {
        type: 'string',
        description: 'Defines the public description of the WAF rule.',
      },
      direction: {
        type: 'string',
        description: 'Defines the direction used to sort returned rules.',
        enum: ['asc', 'desc'],
      },
      group_id: {
        type: 'string',
        description: 'Defines the unique identifier of the rule group.',
      },
      match: {
        type: 'string',
        description:
          'Defines the search requirements. When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.',
        enum: ['any', 'all'],
      },
      mode: {
        type: 'string',
        description: 'Defines the action/mode a rule has been overridden to perform.',
        enum: ['DIS', 'CHL', 'BLK', 'SIM'],
      },
      order: {
        type: 'string',
        description: 'Defines the field used to sort returned rules.',
        enum: ['priority', 'group_id', 'description'],
      },
      page: {
        type: 'number',
        description: 'Defines the page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Defines the number of rules per page.',
      },
      priority: {
        type: 'string',
        description: 'Defines the order in which the individual WAF rule is executed within its rule group.',
      },
    },
    required: ['zone_id', 'package_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { package_id, ...body } = args as any;
  const response = await client.firewall.waf.packages.rules.list(package_id, body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
