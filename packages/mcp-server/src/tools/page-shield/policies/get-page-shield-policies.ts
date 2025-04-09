// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.policies',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_page_shield_policies',
  description: 'Fetches a Page Shield policy by ID.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      policy_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { policy_id, ...body } = args;
  return client.pageShield.policies.get(policy_id, body);
};

export default { metadata, tool, handler };
