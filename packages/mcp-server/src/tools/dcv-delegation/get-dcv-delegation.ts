// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dcv_delegation',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/dcv_delegation/uuid',
  operationId: 'dcv-delegation-uuid-get',
};

export const tool: Tool = {
  name: 'get_dcv_delegation',
  description:
    'Retrieve the account and zone specific unique identifier used as part of the CNAME target for DCV Delegation.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.dcvDelegation.get(body);
};

export default { metadata, tool, handler };
