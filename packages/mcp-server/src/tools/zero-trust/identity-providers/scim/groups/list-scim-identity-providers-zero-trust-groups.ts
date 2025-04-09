// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.identity_providers.scim.groups',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_scim_identity_providers_zero_trust_groups',
  description:
    'Lists SCIM Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      identity_provider_id: {
        type: 'string',
        description: 'UUID.',
      },
      cf_resource_id: {
        type: 'string',
        description: 'The unique Cloudflare-generated Id of the SCIM Group resource; also known as the "Id".',
      },
      idp_resource_id: {
        type: 'string',
        description: 'The IdP-generated Id of the SCIM Group resource; also known as the "external Id".',
      },
      name: {
        type: 'string',
        description: 'The display name of the SCIM Group resource.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identity_provider_id, ...body } = args;
  return client.zeroTrust.identityProviders.scim.groups.list(identity_provider_id, body);
};

export default { metadata, tool, handler };
