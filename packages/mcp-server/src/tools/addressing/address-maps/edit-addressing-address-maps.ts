// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_addressing_address_maps',
  description: 'Modify properties of an address map owned by the account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      address_map_id: {
        type: 'string',
        description: 'Identifier of an Address Map.',
      },
      default_sni: {
        type: 'string',
        description:
          'If you have legacy TLS clients which do not send the TLS server name indicator, then you can specify one default SNI on the map. If Cloudflare receives a TLS handshake from a client without an SNI, it will respond with the default SNI on those IPs. The default SNI can be any valid zone or subdomain owned by the account.',
      },
      description: {
        type: 'string',
        description:
          'An optional description field which may be used to describe the types of IPs or zones on the map.',
      },
      enabled: {
        type: 'boolean',
        description:
          "Whether the Address Map is enabled or not. Cloudflare's DNS will not respond with IP addresses on an Address Map until the map is enabled.",
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { address_map_id, ...body } = args;
  return client.addressing.addressMaps.edit(address_map_id, body);
};

export default { metadata, tool, handler };
