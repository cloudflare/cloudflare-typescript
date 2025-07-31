// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.organizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/organizations/{organization_id}',
  operationId: "user'-s-organizations-organization-details",
};

export const tool: Tool = {
  name: 'get_user_organizations',
  description: 'Gets a specific organization the user is associated with.',
  inputSchema: {
    type: 'object',
    properties: {
      organization_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
    required: ['organization_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { organization_id, ...body } = args as any;
  return asTextContentResult((await client.user.organizations.get(organization_id)) as object);
};

export default { metadata, tool, handler };
