// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.audit_ssh_settings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/gateway/audit_ssh_settings',
  operationId: 'zero-trust-get-audit-ssh-settings',
};

export const tool: Tool = {
  name: 'get_gateway_zero_trust_audit_ssh_settings',
  description:
    'Gets all Zero Trust Audit SSH and SSH with Access for Infrastructure settings for an account.',
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
  return asTextContentResult(await client.zeroTrust.gateway.auditSSHSettings.get(body));
};

export default { metadata, tool, handler };
