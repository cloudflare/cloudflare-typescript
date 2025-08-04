// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.identity_providers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/access/identity_providers',
};

export const tool: Tool = {
  name: 'list_zero_trust_identity_providers',
  description: 'Lists all configured identity providers.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      page: {
        type: 'integer',
        description: 'Page number of results.',
      },
      per_page: {
        type: 'integer',
        description: 'Number of results per page.',
      },
      scim_enabled: {
        type: 'string',
        description:
          'Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled.',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zeroTrust.identityProviders.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
