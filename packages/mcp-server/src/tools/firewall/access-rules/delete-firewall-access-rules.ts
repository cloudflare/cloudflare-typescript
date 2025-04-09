// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.access_rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_firewall_access_rules',
  description:
    'Deletes an existing IP Access rule defined.\n\nNote: This operation will affect all zones in the account or zone.',
  inputSchema: {
    type: 'object',
    properties: {
      rule_id: {
        type: 'string',
        description: 'Unique identifier for a rule',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.firewall.accessRules.delete(rule_id, body);
};

export default { metadata, tool, handler };
