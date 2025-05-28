// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.app_types',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/gateway/app_types',
  operationId:
    'zero-trust-gateway-application-and-application-type-mappings-list-application-and-application-type-mappings',
};

export const tool: Tool = {
  name: 'list_gateway_zero_trust_app_types',
  description: 'Fetches all application and application type mappings.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zeroTrust.gateway.appTypes.list(body);
};

export default { metadata, tool, handler };
