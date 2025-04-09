// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.instances.events',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_instances_workflows_events',
  description: 'Send event to instance',
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
      event_type: {
        type: 'string',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { event_type, ...body } = args;
  return client.workflows.instances.events.create(event_type, body);
};

export default { metadata, tool, handler };
