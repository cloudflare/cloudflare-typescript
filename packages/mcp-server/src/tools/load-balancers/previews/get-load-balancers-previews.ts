// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.previews',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/load_balancers/preview/{preview_id}',
  operationId: 'account-load-balancer-monitors-preview-result',
};

export const tool: Tool = {
  name: 'get_load_balancers_previews',
  description: 'Get the result of a previous preview operation using the provided preview_id.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      preview_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { preview_id, ...body } = args as any;
  return asTextContentResult(await client.loadBalancers.previews.get(preview_id, body));
};

export default { metadata, tool, handler };
