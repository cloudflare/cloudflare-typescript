// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.instances',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_workflows_instances',
  description: 'Create a new workflow instance',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      workflow_name: {
        type: 'string',
      },
      instance_id: {
        type: 'string',
      },
      params: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { workflow_name, ...body } = args;
  return client.workflows.instances.create(workflow_name, body);
};

export default { metadata, tool, handler };
