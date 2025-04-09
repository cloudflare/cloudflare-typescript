// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.advertisement_status',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_prefixes_addressing_advertisement_status',
  description:
    'Advertise or withdraw the BGP route for a prefix.\n\n**Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for advertising and withdrawing \nsubnets of an IP prefix.\n',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      prefix_id: {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
      },
      advertised: {
        type: 'boolean',
        description:
          'Advertisement status of the prefix. If `true`, the BGP route for the prefix is advertised to the Internet. If \n`false`, the BGP route is withdrawn.\n',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { prefix_id, ...body } = args;
  return client.addressing.prefixes.advertisementStatus.edit(prefix_id, body);
};

export default { metadata, tool, handler };
