// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_nameservers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/custom_ns',
  operationId: 'account-level-custom-nameservers-add-account-custom-nameserver',
};

export const tool: Tool = {
  name: 'create_custom_nameservers',
  description: 'Add Account Custom Nameserver',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      ns_name: {
        type: 'string',
        description: 'The FQDN of the name server.',
      },
      ns_set: {
        type: 'number',
        description: 'The number of the set that this name server belongs to.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.customNameservers.create(body);
};

export default { metadata, tool, handler };
