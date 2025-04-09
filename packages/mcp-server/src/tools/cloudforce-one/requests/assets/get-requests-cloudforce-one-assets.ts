// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.assets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_requests_cloudforce_one_assets',
  description: 'Get a Request Asset',
  inputSchema: {
    type: 'object',
    properties: {
      account_identifier: {
        type: 'string',
        description: 'Identifier',
      },
      request_identifier: {
        type: 'string',
        description: 'UUID',
      },
      asset_identifer: {
        type: 'string',
        description: 'UUID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { asset_identifer, ...body } = args;
  return client.cloudforceOne.requests.assets.get(asset_identifer, body);
};

export default { metadata, tool, handler };
