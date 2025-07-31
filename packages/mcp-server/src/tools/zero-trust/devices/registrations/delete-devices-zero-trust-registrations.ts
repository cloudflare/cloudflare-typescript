// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.registrations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/devices/registrations/{registration_id}',
  operationId: 'delete-registration',
};

export const tool: Tool = {
  name: 'delete_devices_zero_trust_registrations',
  description: 'Deletes a WARP registration.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      registration_id: {
        type: 'string',
      },
    },
    required: ['account_id', 'registration_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { registration_id, ...body } = args as any;
  return asTextContentResult(
    (await client.zeroTrust.devices.registrations.delete(registration_id, body)) as object,
  );
};

export default { metadata, tool, handler };
