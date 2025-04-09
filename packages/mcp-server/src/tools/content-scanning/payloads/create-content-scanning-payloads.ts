// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'content_scanning.payloads',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_content_scanning_payloads',
  description: 'Add custom scan expressions for Content Scanning',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            payload: {
              type: 'string',
              description: 'Ruleset expression to use in matching content objects',
            },
          },
          required: ['payload'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.contentScanning.payloads.create(body);
};

export default { metadata, tool, handler };
