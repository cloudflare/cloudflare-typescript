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
  name: 'update_gateway_zero_trust_audit_ssh_settings',
  description: 'Updates Zero Trust Audit SSH and SSH with Access for Infrastructure settings for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      public_key: {
        type: 'string',
        description:
          'Base64 encoded HPKE public key used to encrypt all your ssh session logs. https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/use-cases/ssh/ssh-infrastructure-access/#enable-ssh-command-logging',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.gateway.auditSSHSettings.update(body);
};

export default { metadata, tool, handler };
