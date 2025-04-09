// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_pipelines',
  description: 'Delete a Pipeline.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      pipeline_name: {
        type: 'string',
        description: 'Defines the name of Pipeline.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { pipeline_name, ...body } = args;
  return client.pipelines.delete(pipeline_name, body);
};

export default { metadata, tool, handler };
