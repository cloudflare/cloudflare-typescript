// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.cookies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/page_shield/cookies/{cookie_id}',
  operationId: 'page-shield-get-cookie',
};

export const tool: Tool = {
  name: 'get_page_shield_cookies',
  description: 'Fetches a cookie collected by Page Shield by cookie ID.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      cookie_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { cookie_id, ...body } = args as any;
  return client.pageShield.cookies.get(cookie_id, body);
};

export default { metadata, tool, handler };
