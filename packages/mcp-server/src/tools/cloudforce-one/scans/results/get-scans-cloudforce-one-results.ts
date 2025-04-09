// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.scans.results',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_scans_cloudforce_one_results',
  description: 'Get the Latest Scan Result',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID',
      },
      config_id: {
        type: 'string',
        description: 'Config ID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { config_id, ...body } = args;
  return client.cloudforceOne.scans.results.get(config_id, body);
};

export default { metadata, tool, handler };
