// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai.finetunes.assets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets',
  operationId: 'workers-ai-upload-finetune-asset',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { finetune_id, ...body } = args as any;
  return asTextContentResult(await client.ai.finetunes.assets.create(finetune_id, body));
};

export default { metadata, tool, handler };
