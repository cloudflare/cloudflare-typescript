// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.lockdowns',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/firewall/lockdowns/{lock_downs_id}',
  operationId: 'zone-lockdown-delete-a-zone-lockdown-rule',
};

export const tool: Tool = {
  name: 'delete_firewall_lockdowns',
  description: 'Deletes an existing Zone Lockdown rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      lock_downs_id: {
        type: 'string',
        description: 'The unique identifier of the Zone Lockdown rule.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { lock_downs_id, ...body } = args as any;
  return asTextContentResult(await client.firewall.lockdowns.delete(lock_downs_id, body));
};

export default { metadata, tool, handler };
