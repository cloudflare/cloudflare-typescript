// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps.ownership',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_pcaps_magic_transit_ownership',
  description: 'Adds an AWS or GCP bucket to use with full packet captures.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      destination_conf: {
        type: 'string',
        description: 'The full URI for the bucket. This field only applies to `full` packet captures.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicTransit.pcaps.ownership.create(body);
};

export default { metadata, tool, handler };
