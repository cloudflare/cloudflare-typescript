// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.instances.events',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/events/{event_type}',
  operationId: 'wor-send-event-workflow-instance',
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
        additionalProperties: true,
      },
    },
    required: ['account_id', 'workflow_name', 'instance_id', 'event_type'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { event_type, ...body } = args as any;
  return asTextContentResult((await client.workflows.instances.events.create(event_type, body)) as object);
};

export default { metadata, tool, handler };
