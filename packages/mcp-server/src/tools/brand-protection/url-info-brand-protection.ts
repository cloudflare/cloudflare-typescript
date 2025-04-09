// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'brand_protection',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'url_info_brand_protection',
  description: 'Gets phishing details about a URL.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      url: {
        type: 'array',
        description: 'Submission URL(s) to filter submission results by.',
        items: {
          type: 'string',
        },
      },
      url_id: {
        type: 'array',
        description: 'Submission ID(s) to filter submission results by.',
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.brandProtection.urlInfo(body);
};

export default { metadata, tool, handler };
