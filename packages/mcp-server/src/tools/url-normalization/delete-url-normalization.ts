// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_normalization',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/url_normalization',
  operationId: 'deleteUrlNormalization',
};

export const tool: Tool = {
  name: 'delete_url_normalization',
  description: 'Deletes the URL Normalization settings.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'Zone ID',
        description: 'The unique ID of the zone.',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.urlNormalization.delete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
