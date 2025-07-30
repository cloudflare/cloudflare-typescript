// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.profiles.custom',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dlp/profiles/custom/{profile_id}',
  operationId: 'dlp-profiles-get-custom-profile',
};

export const tool: Tool = {
  name: 'get_profiles_dlp_zero_trust_custom',
  description: 'Fetches a custom DLP profile by id.',
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
    required: ['account_id', 'profile_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { profile_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.dlp.profiles.custom.get(profile_id, body));
};

export default { metadata, tool, handler };
