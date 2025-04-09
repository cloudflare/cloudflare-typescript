// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.organizations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_user_organizations',
  description: 'Removes association to an organization.',
  inputSchema: {
    type: 'object',
    properties: {
      organization_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { organization_id } = args;
  return client.user.organizations.delete(organization_id);
};

export default { metadata, tool, handler };
