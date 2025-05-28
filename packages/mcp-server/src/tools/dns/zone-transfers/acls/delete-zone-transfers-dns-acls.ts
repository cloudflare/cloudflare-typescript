// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.acls',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/secondary_dns/acls/{acl_id}',
  operationId: 'secondary-dns-(-acl)-delete-acl',
};

export const tool: Tool = {
  name: 'delete_zone_transfers_dns_acls',
  description: 'Delete ACL.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      acl_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { acl_id, ...body } = args as any;
  return client.dns.zoneTransfers.acls.delete(acl_id, body);
};

export default { metadata, tool, handler };
