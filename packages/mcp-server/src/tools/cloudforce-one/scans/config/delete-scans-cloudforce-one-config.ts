// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.scans.config',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/cloudforce-one/scans/config/{config_id}',
  operationId: 'delete_DeleteScans',
};

export const tool: Tool = {
  name: 'delete_scans_cloudforce_one_config',
  description: 'Delete a Scan Config',
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
    required: ['account_id', 'config_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { config_id, ...body } = args as any;
  return asTextContentResult((await client.cloudforceOne.scans.config.delete(config_id, body)) as object);
};

export default { metadata, tool, handler };
