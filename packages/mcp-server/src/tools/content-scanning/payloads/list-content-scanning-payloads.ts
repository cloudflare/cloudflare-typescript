// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'content_scanning.payloads',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_content_scanning_payloads',
  description: 'Get a list of existing custom scan expressions for Content Scanning',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.contentScanning.payloads.list(body);
};

export default { metadata, tool, handler };
