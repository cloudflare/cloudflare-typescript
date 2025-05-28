// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.instances',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/workflows/{workflow_name}/instances/batch',
  operationId: 'wor-batch-create-workflow-instance',
};

export const tool: Tool = {
  name: 'bulk_workflows_instances',
  description: 'Batch create new Workflow instances',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      workflow_name: {
        type: 'string',
      },
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            instance_id: {
              type: 'string',
            },
            params: {
              type: 'object',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { workflow_name, ...body } = args as any;
  return client.workflows.instances.bulk(workflow_name, body);
};

export default { metadata, tool, handler };
