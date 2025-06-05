// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'leaked_credential_checks.detections',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/leaked-credential-checks/detections',
  operationId: 'waf-product-api-leaked-credentials-create-detection',
};

export const tool: Tool = {
  name: 'create_leaked_credential_checks_detections',
  description: 'Create user-defined detection pattern for Leaked Credential Checks.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      password: {
        type: 'string',
        description: 'Defines ehe ruleset expression to use in matching the password in a request.',
      },
      username: {
        type: 'string',
        description: 'Defines the ruleset expression to use in matching the username in a request.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.leakedCredentialChecks.detections.create(body));
};

export default { metadata, tool, handler };
