// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites.acls',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}',
  operationId: 'magic-site-acls-delete-acl',
};

export const tool: Tool = {
  name: 'delete_sites_magic_transit_acls',
  description: 'Remove a specific Site ACL.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      site_id: {
        type: 'string',
        description: 'Identifier',
      },
      acl_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { acl_id, ...body } = args as any;
  return client.magicTransit.sites.acls.delete(acl_id, body);
};

export default { metadata, tool, handler };
