// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices',
  operationId: 'devices-list-devices',
};

export const tool: Tool = {
  name: 'list_zero_trust_devices',
  description:
    'List WARP registrations.\n\n**Deprecated**: please use one of the following endpoints instead:\n- GET /accounts/{account_id}/devices/physical-devices\n- GET /accounts/{account_id}/devices/registrations\n',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.devices.list(body));
};

export default { metadata, tool, handler };
