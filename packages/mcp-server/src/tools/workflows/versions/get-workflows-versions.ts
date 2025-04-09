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
  name: 'get_workflows_versions',
  description: 'Get Workflow version details',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      workflow_name: {
        type: 'string',
      },
      version_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { version_id, ...body } = args;
  return client.workflows.versions.get(version_id, body);
};

export default { metadata, tool, handler };
