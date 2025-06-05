// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logs.control.cmb.config',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/logs/control/cmb/config',
  operationId: 'post-accounts-account_id-logs-control-cmb-config',
};

export const tool: Tool = {
  name: 'create_cmb_control_logs_config',
  description: 'Updates CMB config.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      allow_out_of_region_access: {
        type: 'boolean',
        description: 'Allow out of region access',
      },
      regions: {
        type: 'string',
        description: 'Name of the region.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.logs.control.cmb.config.create(body));
};

export default { metadata, tool, handler };
