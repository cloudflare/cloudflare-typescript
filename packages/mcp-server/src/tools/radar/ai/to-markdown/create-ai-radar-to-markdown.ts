// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.ai.to_markdown',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_ai_radar_to_markdown',
  description: 'Convert Files into Markdown',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      body: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.radar.ai.toMarkdown.create(body);
};

export default { metadata, tool, handler };
