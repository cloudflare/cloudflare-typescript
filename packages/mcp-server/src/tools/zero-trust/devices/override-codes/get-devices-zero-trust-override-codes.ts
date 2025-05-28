// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.override_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/registrations/{registration_id}/override_codes',
  operationId: 'get-registration-override-codes',
};

export const tool: Tool = {
  name: 'get_devices_zero_trust_override_codes',
  description:
    'Fetches one-time use admin override codes for a registration. This relies on the **Admin Override** setting being enabled in your device configuration.',
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
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { registration_id, ...body } = args as any;
  return client.zeroTrust.devices.overrideCodes.get(registration_id, body);
};

export default { metadata, tool, handler };
