// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logs.control.retention',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_control_logs_retention',
  description: 'Updates log retention flag for Logpull API.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      flag: {
        type: 'boolean',
        description: 'The log retention flag for Logpull API.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.logs.control.retention.create(body);
};

export default { metadata, tool, handler };
