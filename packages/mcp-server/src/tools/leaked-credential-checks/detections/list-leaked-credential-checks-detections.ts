// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'leaked_credential_checks.detections',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_leaked_credential_checks_detections',
  description: 'List user-defined detection patterns for Leaked Credential Checks',
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
  return client.leakedCredentialChecks.detections.list(body);
};

export default { metadata, tool, handler };
