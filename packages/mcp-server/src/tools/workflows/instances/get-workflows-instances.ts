// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.instances',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}',
  operationId: 'wor-describe-workflow-instance',
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
    required: ['account_id', 'workflow_name', 'instance_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { instance_id, ...body } = args as any;
  return asTextContentResult(await client.workflows.instances.get(instance_id, body));
};

export default { metadata, tool, handler };
