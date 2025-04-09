// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.instances.status',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_instances_workflows_status',
  description: 'Change status of instance',
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
      status: {
        type: 'string',
        description: 'Possible actions to apply to instance',
        enum: ['resume', 'pause', 'terminate'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { instance_id, ...body } = args;
  return client.workflows.instances.status.edit(instance_id, body);
};

export default { metadata, tool, handler };
