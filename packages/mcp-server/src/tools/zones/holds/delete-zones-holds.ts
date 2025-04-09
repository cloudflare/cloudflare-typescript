// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.holds',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_zones_holds',
  description:
    "Stop enforcement of a zone hold on the zone, permanently or temporarily, allowing the\ncreation and activation of zones with this zone's hostname.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      hold_after: {
        type: 'string',
        description:
          'If `hold_after` is provided, the hold will be temporarily disabled,\nthen automatically re-enabled by the system at the time specified\nin this RFC3339-formatted timestamp. Otherwise, the hold will be\ndisabled indefinitely.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zones.holds.delete(body);
};

export default { metadata, tool, handler };
