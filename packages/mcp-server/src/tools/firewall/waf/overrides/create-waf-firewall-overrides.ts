// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.overrides',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_waf_firewall_overrides',
  description:
    'Creates a URI-based WAF override for a zone.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      urls: {
        type: 'array',
        description:
          'The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.firewall.waf.overrides.create(body);
};

export default { metadata, tool, handler };
