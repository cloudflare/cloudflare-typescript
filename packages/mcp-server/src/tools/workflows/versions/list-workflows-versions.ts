// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.versions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_workflows_versions',
  description: 'List deployed Workflow versions',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      workflow_name: {
        type: 'string',
      },
      page: {
        type: 'number',
      },
      per_page: {
        type: 'number',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { workflow_name, ...body } = args;
  return client.workflows.versions.list(workflow_name, body);
};

export default { metadata, tool, handler };
