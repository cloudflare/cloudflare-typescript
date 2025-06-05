// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'botnet_feed.configs.asn',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/botnet_feed/configs/asn/{asn_id}',
  operationId: 'botnet-threat-feed-delete-asn',
};

export const tool: Tool = {
  name: 'delete_configs_botnet_feed_asn',
  description: 'Delete an ASN from botnet threat feed for a given user.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      asn_id: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { asn_id, ...body } = args as any;
  return asTextContentResult(await client.botnetFeed.configs.asn.delete(asn_id, body));
};

export default { metadata, tool, handler };
