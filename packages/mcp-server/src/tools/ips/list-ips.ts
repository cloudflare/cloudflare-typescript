// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ips',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_ips',
  description:
    'Get IPs used on the Cloudflare/JD Cloud network, see https://www.cloudflare.com/ips for Cloudflare IPs or https://developers.cloudflare.com/china-network/reference/infrastructure/ for JD Cloud IPs.',
  inputSchema: {
    type: 'object',
    properties: {
      networks: {
        type: 'string',
        description: 'Specified as `jdcloud` to list IPs used by JD Cloud data centers.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.ips.list(body);
};

export default { metadata, tool, handler };
