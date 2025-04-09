// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'leaked_credential_checks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_leaked_credential_checks',
  description: 'Updates the current status of Leaked Credential Checks',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      enabled: {
        type: 'boolean',
        description: 'Whether or not Leaked Credential Checks are enabled',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.leakedCredentialChecks.create(body);
};

export default { metadata, tool, handler };
