// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.content',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/content/v2',
  operationId: 'worker-script-get-content',
};

export const tool: Tool = {
  name: 'get_scripts_workers_content',
  description: 'Fetch script content only.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return client.workers.scripts.content.get(script_name, body);
};

export default { metadata, tool, handler };
