// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'botnet_feed.configs.asn',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_configs_botnet_feed_asn',
  description: 'Delete an ASN from botnet threat feed for a given user.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      asn_id: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { asn_id, ...body } = args;
  return client.botnetFeed.configs.asn.delete(asn_id, body);
};

export default { metadata, tool, handler };
