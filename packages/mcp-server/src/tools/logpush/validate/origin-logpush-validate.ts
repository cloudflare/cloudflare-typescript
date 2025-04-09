// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logpush.validate',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'origin_logpush_validate',
  description: 'Validates logpull origin with logpull_options.',
  inputSchema: {
    type: 'object',
    properties: {
      logpull_options: {
        type: 'string',
        description:
          'This field is deprecated. Use `output_options` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api, copy the url (full url or just the query string) of your call here, and logpush will keep on making this call for you, setting start and end times appropriately.',
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
  return client.logpush.validate.origin(body);
};

export default { metadata, tool, handler };
