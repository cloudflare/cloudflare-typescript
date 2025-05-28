// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.profiles.custom',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/dlp/profiles/custom/{profile_id}',
  operationId: 'dlp-profiles-delete-custom-profile',
};

export const tool: Tool = {
  name: 'delete_profiles_dlp_zero_trust_custom',
  description: 'Deletes a DLP custom profile.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      profile_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { profile_id, ...body } = args as any;
  return client.zeroTrust.dlp.profiles.custom.delete(profile_id, body);
};

export default { metadata, tool, handler };
