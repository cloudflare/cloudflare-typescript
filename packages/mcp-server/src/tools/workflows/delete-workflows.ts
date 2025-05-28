// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/workflows/{workflow_name}',
  operationId: 'wor-delete-workflow',
};

export const tool: Tool = {
  name: 'delete_workflows',
  description:
    'Deletes a Workflow. This only deletes the Workflow and does not delete or modify any Worker associated to this Workflow or bounded to it.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { workflow_name, ...body } = args as any;
  return client.workflows.delete(workflow_name, body);
};

export default { metadata, tool, handler };
