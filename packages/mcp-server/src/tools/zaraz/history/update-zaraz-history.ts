// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zaraz.history',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/settings/zaraz/history',
  operationId: 'put-zones-zone_identifier-zaraz-history',
};

export const tool: Tool = {
  name: 'update_zaraz_history',
  description: 'Restores a historical published Zaraz configuration by ID for a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      body: {
        type: 'integer',
        description: 'ID of the Zaraz configuration to restore.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zaraz.history.update(body));
};

export default { metadata, tool, handler };
