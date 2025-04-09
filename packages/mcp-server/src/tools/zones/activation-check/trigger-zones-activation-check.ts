// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.activation_check',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'trigger_zones_activation_check',
  description:
    'Triggeres a new activation check for a PENDING Zone. This can be\ntriggered every 5 min for paygo/ent customers, every hour for FREE\nZones.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zones.activationCheck.trigger(body);
};

export default { metadata, tool, handler };
