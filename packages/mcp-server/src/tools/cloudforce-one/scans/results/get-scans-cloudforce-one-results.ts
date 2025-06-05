// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.scans.results',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/scans/results/{config_id}',
  operationId: 'get_GetOpenPorts',
};

export const tool: Tool = {
  name: 'get_scans_cloudforce_one_results',
  description: 'Get the Latest Scan Result',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Defines the Account ID.',
      },
      config_id: {
        type: 'string',
        description: 'Defines the Config ID.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { config_id, ...body } = args as any;
  return asTextContentResult(await client.cloudforceOne.scans.results.get(config_id, body));
};

export default { metadata, tool, handler };
