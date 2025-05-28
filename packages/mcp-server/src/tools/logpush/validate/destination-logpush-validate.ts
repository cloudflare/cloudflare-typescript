// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logpush.validate',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/logpush/validate/destination',
};

export const tool: Tool = {
  name: 'destination_logpush_validate',
  description: 'Validates destination.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.logpush.validate.destination(body);
};

export default { metadata, tool, handler };
