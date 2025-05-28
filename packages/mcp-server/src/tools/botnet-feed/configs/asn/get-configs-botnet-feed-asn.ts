// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'botnet_feed.configs.asn',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/botnet_feed/configs/asn',
  operationId: 'botnet-threat-feed-list-asn',
};

export const tool: Tool = {
  name: 'get_configs_botnet_feed_asn',
  description: 'Gets a list of all ASNs registered for a user for the DDoS Botnet Feed API.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.botnetFeed.configs.asn.get(body);
};

export default { metadata, tool, handler };
