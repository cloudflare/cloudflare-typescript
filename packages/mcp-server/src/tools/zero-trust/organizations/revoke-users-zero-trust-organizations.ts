// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.organizations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'revoke_users_zero_trust_organizations',
  description: "Revokes a user's access across all applications.",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'The email of the user to revoke.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      devices: {
        type: 'boolean',
        description: 'When set to `true`, all devices associated with the user will be revoked.',
      },
      user_uid: {
        type: 'string',
        description: 'The uuid of the user to revoke.',
      },
      warp_session_reauth: {
        type: 'boolean',
        description:
          'When set to `true`, the user will be required to re-authenticate to WARP for all Gateway policies that enforce a WARP client session duration. When `false`, the user’s WARP session will remain active',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.organizations.revokeUsers(body);
};

export default { metadata, tool, handler };
