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
        description: 'In ISO 8601 with no timezone offsets and in UTC.',
        format: 'date-time',
      },
      date_start: {
        type: 'string',
        description: 'In ISO 8601 with no timezone offsets and in UTC.',
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
          'unknown',
        ],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { workflow_name, ...body } = args;
  return client.workflows.instances.list(workflow_name, body);
};

export default { metadata, tool, handler };
