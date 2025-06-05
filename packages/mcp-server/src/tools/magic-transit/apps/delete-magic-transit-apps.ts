// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.apps',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/magic/apps/{account_app_id}',
  operationId: 'magic-account-apps-delete-app',
};

export const tool: Tool = {
  name: 'delete_magic_transit_apps',
  description: 'Deletes specific Account App.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      account_app_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { account_app_id, ...body } = args as any;
  return asTextContentResult(await client.magicTransit.apps.delete(account_app_id, body));
};

export default { metadata, tool, handler };
