// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.registrations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/devices/registrations',
  operationId: 'delete-registrations',
};

export const tool: Tool = {
  name: 'bulk_delete_devices_zero_trust_registrations',
  description: 'Deletes a list of WARP registrations.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'array',
        description: 'A list of registration IDs to delete.',
        items: {
          type: 'string',
        },
      },
    },
    required: ['account_id', 'id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.zeroTrust.devices.registrations.bulkDelete(body)) as object);
};

export default { metadata, tool, handler };
