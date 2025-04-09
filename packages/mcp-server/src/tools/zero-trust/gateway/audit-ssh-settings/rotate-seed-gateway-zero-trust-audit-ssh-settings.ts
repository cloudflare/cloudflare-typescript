// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.audit_ssh_settings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'rotate_seed_gateway_zero_trust_audit_ssh_settings',
  description:
    'Rotates the SSH account seed that is used for generating the host key identity when connecting through the Cloudflare SSH Proxy.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.gateway.auditSSHSettings.rotateSeed(body);
};

export default { metadata, tool, handler };
