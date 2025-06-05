// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.organizations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/user/organizations/{organization_id}',
  operationId: "user'-s-organizations-leave-organization",
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { organization_id, ...body } = args as any;
  return asTextContentResult(await client.user.organizations.delete(organization_id));
};

export default { metadata, tool, handler };
