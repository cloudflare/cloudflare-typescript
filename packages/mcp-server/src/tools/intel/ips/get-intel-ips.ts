// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.ips',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_intel_ips',
  description:
    'Gets the geolocation, ASN, infrastructure type of the ASN, and any security threat categories of an IP address. This is an alternative to the `/intel/ip/{ipv_type}/{ip_address}` endpoint. Must provide query parameters containing `IPv4` or `IPv6` and the IP address.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      ipv4: {
        type: 'string',
      },
      ipv6: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.intel.ips.get(body);
};

export default { metadata, tool, handler };
