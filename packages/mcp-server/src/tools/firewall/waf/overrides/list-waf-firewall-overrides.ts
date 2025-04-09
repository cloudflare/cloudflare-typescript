// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.overrides',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_waf_firewall_overrides',
  description:
    'Fetches the URI-based WAF overrides in a zone.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      page: {
        type: 'number',
        description: 'The page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'The number of WAF overrides per page.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.firewall.waf.overrides.list(body);
};

export default { metadata, tool, handler };
