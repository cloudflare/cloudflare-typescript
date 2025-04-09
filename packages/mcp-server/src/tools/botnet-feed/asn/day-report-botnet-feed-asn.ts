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
  name: 'day_report_botnet_feed_asn',
  description:
    'Gets all the data the botnet tracking database has for a given ASN registered to user account for given date. If no date is given, it will return results for the previous day.',
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
      date: {
        type: 'string',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { asn_id, ...body } = args;
  return client.botnetFeed.asn.dayReport(asn_id, body);
};

export default { metadata, tool, handler };
