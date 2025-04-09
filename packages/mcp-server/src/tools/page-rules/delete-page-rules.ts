// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_page_rules',
  description: 'Deletes an existing Page Rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      pagerule_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { pagerule_id, ...body } = args;
  return client.pageRules.delete(pagerule_id, body);
};

export default { metadata, tool, handler };
