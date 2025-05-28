// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'alerting.policies',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/alerting/v3/policies/{policy_id}',
  operationId: 'notification-policies-delete-a-notification-policy',
};

export const tool: Tool = {
  name: 'delete_alerting_policies',
  description: 'Delete a Notification policy.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account id',
      },
      policy_id: {
        type: 'string',
        description: 'The unique identifier of a notification policy',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_id, ...body } = args as any;
  return client.alerting.policies.delete(policy_id, body);
};

export default { metadata, tool, handler };
