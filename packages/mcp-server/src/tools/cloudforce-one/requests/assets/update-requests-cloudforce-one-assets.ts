// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.assets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_requests_cloudforce_one_assets',
  description: 'Update a Request Asset',
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
      source: {
        type: 'string',
        description: 'Asset file to upload',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { asset_identifer, ...body } = args;
  return client.cloudforceOne.requests.assets.update(asset_identifer, body);
};

export default { metadata, tool, handler };
