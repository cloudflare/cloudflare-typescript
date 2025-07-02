// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.instances',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/workflows/{workflow_name}/instances',
  operationId: 'wor-create-new-workflow-instance',
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
      instance_retention: {
        type: 'object',
      },
      params: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { workflow_name, ...body } = args as any;
  return asTextContentResult(await client.workflows.instances.create(workflow_name, body));
};

export default { metadata, tool, handler };
