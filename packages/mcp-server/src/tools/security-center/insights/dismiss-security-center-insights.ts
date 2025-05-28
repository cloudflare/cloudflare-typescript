// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'security_center.insights',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/security-center/insights/{issue_id}/dismiss',
};

export const tool: Tool = {
  name: 'dismiss_security_center_insights',
  description: 'Archive Security Center Insight',
  inputSchema: {
    type: 'object',
    properties: {
      issue_id: {
        type: 'string',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      dismiss: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { issue_id, ...body } = args as any;
  return client.securityCenter.insights.dismiss(issue_id, body);
};

export default { metadata, tool, handler };
