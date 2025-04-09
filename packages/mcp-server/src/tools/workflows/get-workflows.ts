// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_workflows',
  description: 'Get Workflow details',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      workflow_name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { workflow_name, ...body } = args;
  return client.workflows.get(workflow_name, body);
};

export default { metadata, tool, handler };
