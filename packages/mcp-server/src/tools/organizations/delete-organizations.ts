// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'organizations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/organizations/{organization_id}',
  operationId: 'Organizations_delete',
};

export const tool: Tool = {
  name: 'delete_organizations',
  description:
    'Delete an organization. The organization MUST be empty before deleting.\nIt must not contain any sub-organizations, accounts, members or users.',
  inputSchema: {
    type: 'object',
    properties: {
      organization_id: {
        type: 'string',
        title: 'Organization ID',
      },
    },
    required: ['organization_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { organization_id, ...body } = args as any;
  const response = await client.organizations.delete(organization_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
