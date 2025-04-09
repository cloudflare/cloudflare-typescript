// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logpush.ownership',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_logpush_ownership',
  description: 'Gets a new ownership challenge sent to your destination.',
  inputSchema: {
    type: 'object',
    properties: {
      destination_conf: {
        type: 'string',
        description:
          'Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. Additional configuration parameters supported by the destination may be included.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.logpush.ownership.create(body);
};

export default { metadata, tool, handler };
