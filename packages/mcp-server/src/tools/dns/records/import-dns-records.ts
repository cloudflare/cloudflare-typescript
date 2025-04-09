// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.records',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'import_dns_records',
  description:
    'You can upload your [BIND config](https://en.wikipedia.org/wiki/Zone_file "Zone file") through this endpoint. It assumes that cURL is called from a location with bind_config.txt (valid BIND config) present.\n\nSee [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/ "Import and export records") for more information.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      file: {
        type: 'string',
        description:
          "BIND config to import.\n\n**Tip:** When using cURL, a file can be uploaded using `--form 'file=@bind_config.txt'`.\n",
      },
      proxied: {
        type: 'string',
        description:
          'Whether or not proxiable records should receive the performance and security benefits of Cloudflare.\n\nThe value should be either `true` or `false`.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dns.records.import(body);
};

export default { metadata, tool, handler };
