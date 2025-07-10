// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/pagerules/{pagerule_id}',
  operationId: 'page-rules-get-a-page-rule',
};

export const tool: Tool = {
  name: 'get_page_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the details of a Page Rule.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      pagerule_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pagerule_id, ...body } = args as any;
  return asTextContentResult(await client.pageRules.get(pagerule_id, body));
};

export default { metadata, tool, handler };
