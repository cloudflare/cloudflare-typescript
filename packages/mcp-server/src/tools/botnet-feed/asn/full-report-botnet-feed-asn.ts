// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'botnet_feed.asn',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'full_report_botnet_feed_asn',
  description:
    'Gets all the data the botnet threat feed tracking database has for a given ASN registered to user account.',
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
  return client.botnetFeed.asn.fullReport(asn_id, body);
};

export default { metadata, tool, handler };
