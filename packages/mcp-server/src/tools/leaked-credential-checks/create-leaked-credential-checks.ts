// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'leaked_credential_checks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/leaked-credential-checks',
  operationId: 'waf-product-api-leaked-credentials-set-status',
};

export const tool: Tool = {
  name: 'create_leaked_credential_checks',
  description: 'Updates the current status of Leaked Credential Checks.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      enabled: {
        type: 'boolean',
        description: 'Determines whether or not Leaked Credential Checks are enabled.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.leakedCredentialChecks.create(body);
};

export default { metadata, tool, handler };
