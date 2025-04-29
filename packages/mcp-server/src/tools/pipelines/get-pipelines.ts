// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_pipelines',
  description: 'Get configuration of a pipeline.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      pipeline_name: {
        type: 'string',
        description: 'Defines the name of the pipeline.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pipeline_name, ...body } = args as any;
  return client.pipelines.get(pipeline_name, body);
};

export default { metadata, tool, handler };
