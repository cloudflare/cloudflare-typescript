// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_accounts',
  description: 'Create an account (only available for tenant admins at this time)',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Account name',
      },
      type: {
        type: 'string',
        description:
          'the type of account being created. For self-serve customers, use standard. for enterprise customers, use enterprise.',
        enum: ['standard', 'enterprise'],
      },
      unit: {
        type: 'object',
        description:
          'information related to the tenant unit, and optionally, an id of the unit to create the account on. see https://developers.cloudflare.com/tenant/how-to/manage-accounts/',
        properties: {
          id: {
            type: 'string',
            description: 'Tenant unit ID',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.accounts.create(body);
};

export default { metadata, tool, handler };
