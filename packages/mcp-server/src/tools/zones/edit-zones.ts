// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}',
  operationId: 'zones-0-patch',
};

export const tool: Tool = {
  name: 'edit_zones',
  description: 'Edits a zone. Only one zone property can be changed at a time.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      paused: {
        type: 'boolean',
        description:
          'Indicates whether the zone is only using Cloudflare DNS services. A\ntrue value means the zone will not receive security or performance\nbenefits.\n',
      },
      type: {
        type: 'string',
        description:
          'A full zone implies that DNS is hosted with Cloudflare. A partial\nzone is typically a partner-hosted zone or a CNAME setup. This\nparameter is only available to Enterprise customers or if it has\nbeen explicitly enabled on a zone.',
        enum: ['full', 'partial', 'secondary', 'internal'],
      },
      vanity_name_servers: {
        type: 'array',
        description:
          'An array of domains used for custom name servers. This is only\navailable for Business and Enterprise plans.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zones.edit(body));
};

export default { metadata, tool, handler };
