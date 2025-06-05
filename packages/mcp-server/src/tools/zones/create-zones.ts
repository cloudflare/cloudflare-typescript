// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones',
  operationId: 'zones-post',
};

export const tool: Tool = {
  name: 'create_zones',
  description: 'Create Zone',
  inputSchema: {
    type: 'object',
    properties: {
      account: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Identifier',
          },
        },
        required: [],
      },
      name: {
        type: 'string',
        description: 'The domain name.',
      },
      type: {
        $ref: '#/$defs/type',
      },
    },
    $defs: {
      type: {
        type: 'string',
        description:
          'A full zone implies that DNS is hosted with Cloudflare. A partial zone is\ntypically a partner-hosted zone or a CNAME setup.',
        enum: ['full', 'partial', 'secondary', 'internal'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zones.create(body));
};

export default { metadata, tool, handler };
