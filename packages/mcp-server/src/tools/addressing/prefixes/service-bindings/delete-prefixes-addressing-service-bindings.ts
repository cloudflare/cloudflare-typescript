// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.service_bindings',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}',
  operationId: 'ip-address-management-service-bindings-delete-service-binding',
};

export const tool: Tool = {
  name: 'delete_prefixes_addressing_service_bindings',
  description: 'Delete a Service Binding',
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
      binding_id: {
        type: 'string',
        description: 'Identifier of a Service Binding.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { binding_id, ...body } = args as any;
  return asTextContentResult(await client.addressing.prefixes.serviceBindings.delete(binding_id, body));
};

export default { metadata, tool, handler };
