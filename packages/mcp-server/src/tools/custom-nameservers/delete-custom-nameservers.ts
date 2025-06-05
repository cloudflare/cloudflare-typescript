// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_nameservers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/custom_ns/{custom_ns_id}',
  operationId: 'account-level-custom-nameservers-delete-account-custom-nameserver',
};

export const tool: Tool = {
  name: 'delete_custom_nameservers',
  description: 'Delete Account Custom Nameserver',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      custom_ns_id: {
        type: 'string',
        description: 'The FQDN of the name server.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { custom_ns_id, ...body } = args as any;
  return asTextContentResult(await client.customNameservers.delete(custom_ns_id, body));
};

export default { metadata, tool, handler };
