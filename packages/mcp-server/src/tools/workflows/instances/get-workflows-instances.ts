// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.instances',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_workflows_instances',
  description: 'Get logs and status from instance',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { instance_id, ...body } = args;
  return client.workflows.instances.get(instance_id, body);
};

export default { metadata, tool, handler };
