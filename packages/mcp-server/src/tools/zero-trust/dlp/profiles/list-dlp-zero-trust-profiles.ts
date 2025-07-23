// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.profiles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dlp/profiles',
  operationId: 'dlp-profiles-list-all-profiles',
};

export const tool: Tool = {
  name: 'list_dlp_zero_trust_profiles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all DLP profiles in an account.",
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
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zeroTrust.dlp.profiles.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
