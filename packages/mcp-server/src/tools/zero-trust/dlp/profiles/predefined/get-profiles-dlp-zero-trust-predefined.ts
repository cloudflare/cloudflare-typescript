// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.profiles.predefined',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_profiles_dlp_zero_trust_predefined',
  description: 'Fetches a predefined DLP profile by id.',
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

export const handler = (client: Cloudflare, args: any) => {
  const { profile_id, ...body } = args;
  return client.zeroTrust.dlp.profiles.predefined.get(profile_id, body);
};

export default { metadata, tool, handler };
