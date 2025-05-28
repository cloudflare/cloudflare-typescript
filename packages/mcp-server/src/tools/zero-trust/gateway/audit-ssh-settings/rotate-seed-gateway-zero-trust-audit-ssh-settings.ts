// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.audit_ssh_settings',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed',
  operationId: 'zero-trust-rotate-ssh-account-seed',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zeroTrust.gateway.auditSSHSettings.rotateSeed(body);
};

export default { metadata, tool, handler };
