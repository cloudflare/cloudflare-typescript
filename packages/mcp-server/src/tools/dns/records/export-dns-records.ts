// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.records',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'export_dns_records',
  description:
    'You can export your [BIND config](https://en.wikipedia.org/wiki/Zone_file "Zone file") through this endpoint.\n\nSee [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/ "Import and export records") for more information.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dns.records.export(body);
};

export default { metadata, tool, handler };
