// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.risk_scoring.integrations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_risk_scoring_zero_trust_integrations',
  description: 'Overwrite the reference_id, tenant_url, and active values with the ones provided',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      integration_id: {
        type: 'string',
      },
      active: {
        type: 'boolean',
        description:
          'Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.',
      },
      tenant_url: {
        type: 'string',
        description: 'The base url of the tenant, e.g. "https://tenant.okta.com"',
      },
      reference_id: {
        type: 'string',
        description:
          'A reference id that can be supplied by the client. Currently this should be set to the Access-Okta IDP ID (a UUIDv4).\nhttps://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { integration_id, ...body } = args;
  return client.zeroTrust.riskScoring.integrations.update(integration_id, body);
};

export default { metadata, tool, handler };
