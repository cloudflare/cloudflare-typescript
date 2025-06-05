// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zaraz',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/settings/zaraz/workflow',
  operationId: 'put-zones-zone_identifier-zaraz-workflow',
};

export const tool: Tool = {
  name: 'update_zaraz',
  description: 'Updates Zaraz workflow for a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      workflow: {
        $ref: '#/$defs/workflow',
      },
    },
    $defs: {
      workflow: {
        type: 'string',
        description: 'Zaraz workflow',
        enum: ['realtime', 'preview'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zaraz.update(body));
};

export default { metadata, tool, handler };
