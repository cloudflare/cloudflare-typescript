// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.profiles',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_dlp_zero_trust_profiles',
  description: 'Lists all DLP profiles in an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      all: {
        type: 'boolean',
        description: 'Return all profiles, including those that current account does not have access to.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dlp.profiles.list(body);
};

export default { metadata, tool, handler };
