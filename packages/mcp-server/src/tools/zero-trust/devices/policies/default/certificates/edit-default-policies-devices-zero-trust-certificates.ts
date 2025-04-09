// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.default.certificates',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_default_policies_devices_zero_trust_certificates',
  description:
    'Enable Zero Trust Clients to provision a certificate, containing a x509 subject, and referenced by Access device posture policies when the client visits MTLS protected domains. This facilitates device posture without a WARP session.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
      },
      enabled: {
        type: 'boolean',
        description:
          'The current status of the device policy certificate provisioning feature for WARP clients.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.devices.policies.default.certificates.edit(body);
};

export default { metadata, tool, handler };
