// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.resources',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'policy_preview_magic_cloud_networking_resources',
  description: 'Preview Rego query result against the latest resource catalog (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      policy: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicCloudNetworking.resources.policyPreview(body);
};

export default { metadata, tool, handler };
