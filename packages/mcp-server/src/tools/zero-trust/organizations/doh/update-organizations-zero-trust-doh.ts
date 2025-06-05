// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.organizations.doh',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/access/organizations/doh',
  operationId: 'zero-trust-organization-update-your-zero-trust-organization-doh-settings',
};

export const tool: Tool = {
  name: 'update_organizations_zero_trust_doh',
  description: 'Updates the DoH settings for your Zero Trust organization.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      doh_jwt_duration: {
        type: 'string',
        description:
          'The duration the DoH JWT is valid for. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.  Note that the maximum duration for this setting is the same as the key rotation period on the account. Default expiration is 24h',
      },
      service_token_id: {
        type: 'string',
        description: 'The uuid of the service token you want to use for DoH authentication',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.organizations.doh.update(body));
};

export default { metadata, tool, handler };
