// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rulesets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_rulesets',
  description: 'Fetches all rulesets.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      cursor: {
        type: 'string',
        title: 'Cursor',
        description: 'Cursor to use for the next page.',
      },
      per_page: {
        type: 'integer',
        title: 'Per Page',
        description: 'Number of rulesets to return per page.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.rulesets.list(body);
};

export default { metadata, tool, handler };
