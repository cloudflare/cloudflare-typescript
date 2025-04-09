// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'security_center.insights',
  operation: 'write',
  tags: [],
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

export const handler = (client: Cloudflare, args: any) => {
  const { issue_id, ...body } = args;
  return client.securityCenter.insights.dismiss(issue_id, body);
};

export default { metadata, tool, handler };
