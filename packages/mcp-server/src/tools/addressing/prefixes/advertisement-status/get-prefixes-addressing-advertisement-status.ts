// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.advertisement_status',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_prefixes_addressing_advertisement_status',
  description:
    'View the current advertisement state for a prefix.\n\n**Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for advertising and withdrawing \nsubnets of an IP prefix.\n',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { prefix_id, ...body } = args;
  return client.addressing.prefixes.advertisementStatus.get(prefix_id, body);
};

export default { metadata, tool, handler };
