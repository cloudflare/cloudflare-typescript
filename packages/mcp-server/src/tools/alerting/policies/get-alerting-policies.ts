// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'alerting.policies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/alerting/v3/policies/{policy_id}',
  operationId: 'notification-policies-get-a-notification-policy',
};

export const tool: Tool = {
  name: 'get_alerting_policies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet details for a single policy.",
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
    required: ['account_id', 'policy_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_id, ...body } = args as any;
  return asTextContentResult(await client.alerting.policies.get(policy_id, body));
};

export default { metadata, tool, handler };
