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
  name: 'delete_waf_firewall_overrides',
  description:
    'Deletes an existing URI-based WAF override.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      overrides_id: {
        type: 'string',
        description: 'The unique identifier of the WAF override.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { overrides_id, ...body } = args;
  return client.firewall.waf.overrides.delete(overrides_id, body);
};

export default { metadata, tool, handler };
