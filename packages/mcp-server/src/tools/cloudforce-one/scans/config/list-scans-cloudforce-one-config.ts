// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.scans.config',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/scans/config',
  operationId: 'get_ConfigFetch',
};

export const tool: Tool = {
  name: 'list_scans_cloudforce_one_config',
  description: 'List Scan Configs',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Defines the Account ID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.cloudforceOne.scans.config.list(body);
};

export default { metadata, tool, handler };
