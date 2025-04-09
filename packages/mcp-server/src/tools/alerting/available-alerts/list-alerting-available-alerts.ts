// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'alerting.available_alerts',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_alerting_available_alerts',
  description: 'Gets a list of all alert types for which an account is eligible.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account id',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.alerting.availableAlerts.list(body);
};

export default { metadata, tool, handler };
