// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'organizations.organization_profile',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/organizations/{organization_id}/profile',
  operationId: 'Organizations_modifyProfile',
};

export const tool: Tool = {
  name: 'update_organizations_organization_profile',
  description: 'Modify organization profile',
  inputSchema: {
    type: 'object',
    properties: {
      organization_id: {
        type: 'string',
      },
      business_address: {
        type: 'string',
      },
      business_email: {
        type: 'string',
      },
      business_name: {
        type: 'string',
      },
      business_phone: {
        type: 'string',
      },
      external_metadata: {
        type: 'string',
      },
    },
    required: [
      'organization_id',
      'business_address',
      'business_email',
      'business_name',
      'business_phone',
      'external_metadata',
    ],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { organization_id, ...body } = args as any;
  const response = await client.organizations.organizationProfile.update(organization_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
