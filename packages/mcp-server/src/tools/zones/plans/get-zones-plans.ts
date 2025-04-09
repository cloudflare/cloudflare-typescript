// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.plans',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_zones_plans',
  description: 'Details of the available plan that the zone can subscribe to.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      plan_identifier: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { plan_identifier, ...body } = args;
  return client.zones.plans.get(plan_identifier, body);
};

export default { metadata, tool, handler };
