// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai.finetunes.assets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_finetunes_ai_assets',
  description: 'Upload a Finetune Asset',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      finetune_id: {
        type: 'string',
      },
      file: {
        type: 'string',
      },
      file_name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { finetune_id, ...body } = args;
  return client.ai.finetunes.assets.create(finetune_id, body);
};

export default { metadata, tool, handler };
