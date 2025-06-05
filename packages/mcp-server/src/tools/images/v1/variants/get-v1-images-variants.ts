// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'images.v1.variants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/images/v1/variants/{variant_id}',
  operationId: 'cloudflare-images-variants-variant-details',
};

export const tool: Tool = {
  name: 'get_v1_images_variants',
  description: 'Fetch details for a single variant.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      variant_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { variant_id, ...body } = args as any;
  return asTextContentResult(await client.images.v1.variants.get(variant_id, body));
};

export default { metadata, tool, handler };
