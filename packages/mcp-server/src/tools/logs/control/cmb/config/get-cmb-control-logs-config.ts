// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logs.control.cmb.config',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/logs/control/cmb/config',
  operationId: 'get-accounts-account_id-logs-control-cmb-config',
};

export const tool: Tool = {
  name: 'get_cmb_control_logs_config',
  description: 'Gets CMB config.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.logs.control.cmb.config.get(body);
};

export default { metadata, tool, handler };
