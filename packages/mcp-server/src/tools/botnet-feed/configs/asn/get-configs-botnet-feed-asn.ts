// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'botnet_feed.configs.asn',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_configs_botnet_feed_asn',
  description: 'Gets a list of all ASNs registered for a user for the DDoS Botnet Feed API.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.botnetFeed.configs.asn.get(body);
};

export default { metadata, tool, handler };
