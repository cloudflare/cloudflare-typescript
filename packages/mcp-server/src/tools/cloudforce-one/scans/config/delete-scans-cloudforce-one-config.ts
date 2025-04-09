// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.scans.config',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_scans_cloudforce_one_config',
  description: 'Delete a Scan Config',
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
  return client.cloudforceOne.scans.config.delete(config_id, body);
};

export default { metadata, tool, handler };
