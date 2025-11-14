// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.profiles.predefined',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config',
  operationId: 'dlp-profiles-get-predefined-profile-config',
};

export const tool: Tool = {
  name: 'get_profiles_dlp_zero_trust_predefined',
  description:
    'This is similar to `get_predefined` but only returns entries that are enabled.\nThis is needed for our terraform API\nFetches a predefined DLP profile by id.',
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
  return asTextContentResult(await client.zeroTrust.dlp.profiles.predefined.get(profile_id, body));
};

export default { metadata, tool, handler };
