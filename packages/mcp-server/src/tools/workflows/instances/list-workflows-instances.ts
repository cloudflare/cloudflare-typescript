// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.instances',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workflows/{workflow_name}/instances',
  operationId: 'wor-list-workflow-instances',
};

export const tool: Tool = {
  name: 'list_workflows_instances',
  description: 'List of workflow instances',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      workflow_name: {
        type: 'string',
      },
      date_end: {
        type: 'string',
        description: 'Accepts ISO 8601 with no timezone offsets and in UTC.',
        format: 'date-time',
      },
      date_start: {
        type: 'string',
        description: 'Accepts ISO 8601 with no timezone offsets and in UTC.',
        format: 'date-time',
      },
      page: {
        type: 'number',
      },
      per_page: {
        type: 'number',
      },
      status: {
        type: 'string',
        enum: [
          'queued',
          'running',
          'paused',
          'errored',
          'terminated',
          'complete',
          'waitingForPause',
          'waiting',
        ],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { workflow_name, ...body } = args as any;
  return asTextContentResult(await client.workflows.instances.list(workflow_name, body));
};

export default { metadata, tool, handler };
