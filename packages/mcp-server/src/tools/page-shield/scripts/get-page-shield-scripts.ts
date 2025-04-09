// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.scripts',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_page_shield_scripts',
  description: 'Fetches a script detected by Page Shield by script ID.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      script_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { script_id, ...body } = args;
  return client.pageShield.scripts.get(script_id, body);
};

export default { metadata, tool, handler };
