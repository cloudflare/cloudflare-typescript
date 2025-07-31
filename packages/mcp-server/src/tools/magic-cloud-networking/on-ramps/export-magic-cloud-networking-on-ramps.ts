// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.on_ramps',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/cloud/onramps/{onramp_id}/export',
  operationId: 'onramps-export',
};

export const tool: Tool = {
  name: 'export_magic_cloud_networking_on_ramps',
  description: 'Export an On-ramp to terraform ready file(s) (Closed Beta).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      onramp_id: {
        type: 'string',
      },
    },
    required: ['account_id', 'onramp_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { onramp_id, ...body } = args as any;
  return asBinaryContentResult(await client.magicCloudNetworking.onRamps.export(onramp_id, body));
};

export default { metadata, tool, handler };
