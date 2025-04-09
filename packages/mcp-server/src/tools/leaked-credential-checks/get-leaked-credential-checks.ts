// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'leaked_credential_checks',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_leaked_credential_checks',
  description: 'Retrieves the current status of Leaked Credential Checks',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.leakedCredentialChecks.get(body);
};

export default { metadata, tool, handler };
