// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_workflows',
  description: 'Create/modify Workflow',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      workflow_name: {
        type: 'string',
      },
      class_name: {
        type: 'string',
      },
      script_name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { workflow_name, ...body } = args;
  return client.workflows.update(workflow_name, body);
};

export default { metadata, tool, handler };
