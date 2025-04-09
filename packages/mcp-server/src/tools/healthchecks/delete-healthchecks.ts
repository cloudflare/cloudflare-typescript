// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'healthchecks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_healthchecks',
  description: 'Delete a health check.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      healthcheck_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { healthcheck_id, ...body } = args;
  return client.healthchecks.delete(healthcheck_id, body);
};

export default { metadata, tool, handler };
